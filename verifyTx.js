// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
  apiKey: "", // Replace with your API key
  network: Network.MATIC_MUMBAI, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
  // define the transaction hash
  const txHash =
    "0x8628e681d3641694c387ad09d23bd2bf9cc23650edee407876ed5a3da5dea740";

  //Call the method to display the transaction based on the transaction hash
  const response = await alchemy.transact.getTransaction(txHash);

  //Logging the response to the console
  console.log(response);
};

main();
