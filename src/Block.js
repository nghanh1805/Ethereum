import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './Tsx.css';
import { Typography } from 'antd';
import { getBlockDetails } from './Block_API';

const { Text, Link } = Typography;

const formatAge = (secondsAgo) => {
  return `${secondsAgo} secs ago`;
};


const truncateAddress = (address) => {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'N/A';
};

export default function Block() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const blockData = await getBlockDetails('latest'); 
      console.log(blockData); 
      setBlocks([blockData]); 
    };

    fetchBlocks();
  }, []);

  return (
    <div>
      <TopBar />
      <Header />
      <div className="body-container">
        <div className="content-container">
          <h1 className="title-tsx">
            Blocks
            <hr className="custom-hr" />
          </h1>
          <Text className="ad-text">
            <strong>Sponsored:</strong>
            <img
              src="https://etherscan.io/images/gen/stake-4_20.png"
              alt="Stake"
              style={{ height: '24px', marginLeft: '8px' }}
            />
            <strong style={{ marginLeft: '8px' }}>Stake:</strong>
            <span style={{ marginLeft: '8px' }}>
              200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals - Provably Fair.
              <Link href="https://stake.mba/vi?tab=register&modal=auth&offer=butadscn5e&c=aWDbBpUc&clickId=522oEzGaCkTARxWKsuHNeG&utm_medium=cpc&utm_campaign=sb_scan5" className="link">
                Claim Bonus
              </Link>
            </span>
          </Text>

          <div className="dashboard">
            <div className="stats-card">
              <div className="stats-title">NETWORK UTILIZATION (24H)</div>
              <div className="stats-value">50.4%</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">LAST SAFE BLOCK</div>
              <div className="stats-value">20819582</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">PRODUCED BY MEV BUILDERS (24H)</div>
              <div className="stats-value">92.4%</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">BURNT FEES🔥</div>
              <div className="stats-value">4,382,815.28 ETH</div>
            </div>
          </div>

          <div className="transaction-table-container">
            <table>
              <thead>
                <tr>
                  <th>Block</th>
                  <th className="custom-color">Slot</th>
                  <th className="custom-color">Age</th>
                  <th>Txn</th>
                  <th>Fee Recipient</th>
                  <th>Gas Used</th>
                  <th>Gas Limit</th>
                  <th>Base Fee</th>
                  <th>Reward</th>
                  <th>Burnt Fees (ETH)</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(blocks) && blocks.length > 0 ? (
                  blocks.map((block, index) => (
                    <tr key={index}>
                      <td className="custom-color">{block.number}</td>
                      <td className="custom-color">
                        N/A 
                        <i className="fas fa-external-link-alt" style={{ color: 'gray', marginLeft: '4px' }}></i>
                      </td>
                      <td>{formatAge(7)}</td>
                      <td className="custom-color">{block.transactions.length}</td>
                      <td className="custom-color">
                        <a
                          href={`https://etherscan.io/address/${block.miner}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {truncateAddress(block.miner)}
                          <i className="fas fa-external-link-alt" style={{ color: 'gray', marginLeft: '4px' }}></i>
                        </a>
                      </td>
                      <td>{block.gasUsed}</td>
                      <td>{block.gasLimit}</td>
                      <td>{(block.baseFeePerGas / 1e9).toFixed(5)} Gwei</td>
                      <td>N/A</td> 
                      <td>N/A</td> 
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
