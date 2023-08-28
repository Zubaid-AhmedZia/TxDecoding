const axios = require('axios');

async function verifyTransactionWithAlchemy(apiKey, txHash) {
  const endpoint = `https://polygon-mumbai.g.alchemy.com/v2/${apiKey}/transaction/${txHash}`;

  try {
    const response = await axios.get(endpoint);
    return response.data.result;
  } catch (error) {
    console.error(
      `Error: ${error.response.status} - ${error.response.statusText}`,
    );
    return null;
  }
}

const apiKey = '';
const txHash =
  '0x836c8b7eb0ba19341fe68c8e3909d04634648b75a5b05c0263c3b5f2a28bc885';

verifyTransactionWithAlchemy(apiKey, txHash).then((transactionDetails) => {
  if (transactionDetails) {
    console.log(transactionDetails);
  } else {
    console.log('Failed to fetch transaction details.');
  }
});
