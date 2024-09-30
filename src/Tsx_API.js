import axios from 'axios';

const ETHERSCAN_API_KEY = 'B1X9YU25TXS17SHBE8H4PWSBC8U5BBDHJC'; 

const getTransactions = async (address) => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return response.data.result;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

export { getTransactions };

