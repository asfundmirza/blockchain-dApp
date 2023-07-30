const readOnly = () => {
  const { ethers } = require("ethers");

  const contractInteraction = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://sepolia.infura.io/v3/468276c19cff4d9399bf885e703426b7"
    );
    const contractAddress = "0xbdb0b41853421334da9dcde1f6fd3b736ef57036";
    const contractABI = [
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "balances",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "contractBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "getBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "sendEther",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "tranferBalance",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "tranferEther",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ];

    const contractFunction = async () => {
      const walletInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      //Read operations only

      //getting wallet balance

      const walletBalance = await walletInstance.getBalance(
        "0xF9d6e74F9369faed7150256Cf337c382Dc40fB72"
      );
      const walletBalanceInEthers = ethers.utils.formatEther(
        walletBalance,
        "ethers"
      );
      console.log("contract balance is", walletBalanceInEthers);

      //getting contract balance

      const contractBalance = await walletInstance.contractBalance();
      const contractBalanceInEthers = ethers.utils.formatEther(
        contractBalance,
        "ethers"
      );
      console.log("this is the contract balance", contractBalanceInEthers);
    };
    contractFunction();
  };
  contractInteraction();
};
export default readOnly();
