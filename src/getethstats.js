    import Web3 from 'web3';

    const INFURA_END_POINT = "https://mainnet.infura.io/v3/dc9248ae1d6a4f14bb7195967d643821"; 
    const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_END_POINT));

    const getEthStats = async () => {
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
                    const tps = transactionCount / timeTaken
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
            console.error("Error fetching Ethereum stats:", error);
            return null;
        }
    };

    export default getEthStats;
