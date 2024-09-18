import Web3 from 'web3';

const BSC_END_POINT = "https://bsc-mainnet.core.chainstack.com/4a692c5e8835cd5d063bbe56d6b9e7a8"; 
const web3 = new Web3(new Web3.providers.HttpProvider(BSC_END_POINT));

const getBnbStats = async () => {
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
        console.error("Error fetching BNB stats:", error);
        return null;
    }
};

export default getBnbStats;

