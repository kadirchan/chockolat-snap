// 0x4c7708168395aEa569453Fc36862D2ffcDaC588c
const ArbitrumDepositERC20ABI = [
  'function outboundTransfer(address _token,address _to,uint256 _amount,uint256 _maxGas,uint256 _gasPriceBid,bytes _data)',
];
// 0x6bebc4925716945d46f0ec336d5c2564f419682c
const ArbitrumDepositETHABI = ['function depositEth()'];

// 0x0000000000000000000000000000000000000064
const ArbitrumWithdrawETHABI = ['function withdrawEth(address destination)'];

// 0xe5b9d8d42d656d1dcb8065a6c012fe3780246041
const ArbitrumWithdrawERC20ABI = [
  'function outboundTransfer(address _l1Token,address _to,uint256 _amount,bytes _data)',
];

//0x927ddfcc55164a59e0f33918d13a2d559bc10ce7
const ZkSyncDepositERC20ABI = [
  'function deposit(address _l2Receiver,address _l1Token,uint256 _amount,uint256 _l2TxGasLimit,uint256 _l2TxGasPerPubdataByte)',
];

// 0x1908e2bf4a88f91e4ef0dc72f02b8ea36bea2319
const ZksyncDepositETH = [
  'function requestL2Transaction(address _contractL2,uint256 _l2Value,bytes _calldata,uint256 _l2GasLimit,uint256 _gasPricePerPubdata,bytes[] _factoryDeps,address _refundRecipient)',
];
// 0x000000000000000000000000000000000000800a
const zkSyncWithdrawETHABI = ['function withdraw(address _l1Receiver)'];

const zkSyncWithdrawERC20ABI = ['function ']; // todo

export const transactions = {
  '0x4c7708168395aEa569453Fc36862D2ffcDaC588c0x4c7708168395aEa569453Fc36862D2ffcDaC588c':
    {
      name: 'ArbitrumDepositERC20',
      abi: [
        'function outboundTransfer(address _token,address _to,uint256 _amount,uint256 _maxGas,uint256 _gasPriceBid,bytes _data)',
      ],
      message: 'Depositing $2 $0 to Arbitrum.',
    },
  '0x6bebc4925716945d46f0ec336d5c2564f419682c': {
    name: 'ArbitrumDepositETH',
    abi: ['function depositEth()'],
    message: 'Depositing $v ETH to Arbitrum.',
  },
  '0x0000000000000000000000000000000000000064': {
    name: 'ArbitrumWithdrawETH',
    abi: ['function withdrawEth(address destination)'],
    message: 'Withdrawing $v ETH from Arbitrum to Goerli.',
  },
  '0xe5b9d8d42d656d1dcb8065a6c012fe3780246041': {
    name: 'ArbitrumWithdrawERC20',
    abi: [
      'function outboundTransfer(address _l1Token,address _to,uint256 _amount,bytes _data)',
    ],
    message: 'Withdrawing $2 $0 to address $1 on Goerli.',
  },
  '0x927ddfcc55164a59e0f33918d13a2d559bc10ce7': {
    name: 'ZkSyncDepositERC20',
    abi: [
      'function deposit(address _l2Receiver,address _l1Token,uint256 _amount,uint256 _l2TxGasLimit,uint256 _l2TxGasPerPubdataByte)',
    ],
    message: 'Depositing $2 $1 to address $0 on ZkSync.',
  },
  '0x1908e2bf4a88f91e4ef0dc72f02b8ea36bea2319': {
    name: 'ZksyncDepositETH',
    abi: [
      'function requestL2Transaction(address _contractL2,uint256 _l2Value,bytes _calldata,uint256 _l2GasLimit,uint256 _gasPricePerPubdata,bytes[] _factoryDeps,address _refundRecipient)',
    ],
    message: 'Depositing $1 ETH to address $0 on ZkSync.',
  },
  '0x000000000000000000000000000000000000800a': {
    name: 'zkSyncWithdrawETH',
    abi: ['function withdraw(address _l1Receiver)'],
    message: 'Withdrawing $v to address $0 on Goerli.',
  },
  '0x0000000': {
    name: 'cant decode',
    abi: [],
  },
};
