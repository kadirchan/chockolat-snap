//ts-ignore
import { OnTransactionHandler } from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import { Transaction, ethers, utils } from 'ethers';
import { transactions } from './abi';

function replaceWith(message: string, array: any, value: string): string {
  if (message.includes('$v')) {
    message = message.replace('$v', value);
  }
  if (message.includes('$0')) {
    message = message.replace('$0', array[0]);
  }
  if (message.includes('$1')) {
    message = message.replace('$1', array[1]);
  }
  if (message.includes('$2')) {
    message = message.replace('$2', array[2]);
  }
  return message;
}

export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  console.log('transaction', transaction);
  if (typeof transaction.data === 'string' && transaction.data !== '0x') {
    const tx = transaction.to?.toString();
    console.log('tx', tx);
    const abi = transactions[tx as keyof typeof transactions].abi;
    console.log('abi', abi);
    const iface = new ethers.utils.Interface(abi);
    console.log('iface', iface);
    let decodedData = iface.parseTransaction({
      data: transaction.data,
      value: transaction.value,
    });
    console.log('decodedData', decodedData);
    console.log(decodedData.args);
    decodedData.args.forEach((element) => {
      console.log(typeof element);
    });
    let message = transactions[tx as keyof typeof transactions].message;
    console.log('message', message);
    message = replaceWith(
      message,
      decodedData.args,
      utils.formatEther(transaction.value),
    );
    return {
      content: panel([heading('Chockolat Snap'), text(message)]),
    };
  }

  return {
    content: panel([
      heading('Chockolat Snap'),
      text(
        `You are sending ${utils.formatEther(
          transaction.value?.toString(),
        )} ETH to ${transaction.to}`,
      ),
    ]),
  };
};
