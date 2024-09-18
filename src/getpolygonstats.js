import Web3 from 'web3';

const POLYGON_END_POINT = "https://polygon-rpc.com/5ffbe613e8eb45f8169baabbf442f41bff85ea444167d1e4d23426c557ed9585"; 
const web3 = new Web3(new Web3.providers.HttpProvider(POLYGON_END_POINT));

const getPolygonStats = async () => {
    try {
        
        const gasPrice = await web3.eth.getGasPrice(); 
        console.log("Gas Price:", gasPrice);

        
        const currentBlock = await web3.eth.getBlock("latest");
        console.log("Current Block:", currentBlock);

        if (currentBlock && currentBlock.number !== null) {
            
            const previousBlock = await web3.eth.getBlock(currentBlock.parentHash);
            console.log("Previous Block:", previousBlock);

            if (previousBlock && previousBlock.number !== null) {
                
                const timeTaken = Number(currentBlock.timestamp) - Number(previousBlock.timestamp);
                const transactionCount = currentBlock.transactions.length;
                const tps = transactionCount / timeTaken; 

                console.log("Transaction Count:", transactionCount);
                console.log("Time Taken:", timeTaken);
                console.log("TPS:", tps);

                return {
                    currentBlockNumber: currentBlock.number,
                    transactionCount,
                    timeTaken,
                    tps,
                    gasPrice: Number(gasPrice)
                };
            }
        }
    } catch (error) {
        console.error("Error fetching Polygon stats:", error);
        return null;
    }
};

export default getPolygonStats;
