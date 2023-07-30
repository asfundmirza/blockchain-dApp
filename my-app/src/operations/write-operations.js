import { useEffect } from "react";

const WriteOperations = () => {
  const { ethers } = require("ethers");

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
  const changeValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    // await contractInstance.sendEther({
    //   value: ethers.utils.parseEther("0.1"), //if there is no argument given for amount in contract function then we use value
    // });

    // await contractInstance.tranferEther(
    //   "0x62d79d19cf6e5b451427CbA504252F7BAD638a59",
    //   ethers.utils.parseEther("0.01") //if there is an argument given for amount in contract function then we dont use value
    // );
  };
  changeValues();
};
export default WriteOperations();
