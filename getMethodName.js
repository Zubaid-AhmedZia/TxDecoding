const abiDecoder = require("abi-decoder");

// Replace with the contract ABI
const contractAbi = []; // Contract ABI array

// Add our contract ABI to the abiDecoder
abiDecoder.addABI(contractAbi);

// Transaction input data (replace with your actual transaction input data)
const txInputData =
  "0x84b5af51000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000f4240";

// Decode the transaction input data
const decodedData = abiDecoder.decodeMethod(txInputData);

console.log(decodedData);
