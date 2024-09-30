import axios from 'axios';

const ETHERSCAN_API_KEY = 'B1X9YU25TXS17SHBE8H4PWSBC8U5BBDHJC'; 


const getBlockDetails = async (blockNumber) => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true&apikey=${ETHERSCAN_API_KEY}`
    );
    return response.data.result; // Dữ liệu block
  } catch (error) {
    console.error('Error fetching block details:', error);
    return null;
  }
};


export {  getBlockDetails };
