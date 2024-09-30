import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './Tsx.css';
import { Typography, Pagination } from 'antd';
import { getTransactions } from './Tsx_API';

const { Text, Link } = Typography;

const truncateString = (str, maxLength) => {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};

const formatAge = (secondsAgo) => {
  return `${secondsAgo} secs ago`;
};

export default function Tsx() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(20);

  useEffect(() => {
    const fetchTransactions = async () => {
      const txData = await getTransactions('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe');
      setTransactions(txData);
    };

    fetchTransactions();
  }, []);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TopBar />
      <Header />
      <div className="body-container">
        <div className="content-container">
          <h1 className="title-tsx">
            Transactions
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
              <div className="stats-title">TRANSACTIONS (24H)</div>
              <div className="stats-value">
                1,135,378 <span className="stats-percentage" style={{ color: 'green' }}>(6.73%)</span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">PENDING TRANSACTIONS (LAST 1H)</div>
              <div className="stats-value">
                156,465 <span className="stats-percentage">(Average)</span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">NETWORK TRANSACTIONS FEE (24H)</div>
              <div className="stats-value">
                766.69 <span>ETH</span>
                <span className="stats-percentage" style={{ color: 'green' }}>(30.78%)</span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">AVG. TRANSACTION FEE (24H)</div>
              <div className="stats-value">
                7.02 <span>USD</span>
                <span className="stats-percentage" style={{ color: 'green' }}>(69.71%)</span>
              </div>
            </div>
          </div>

          <div className="transaction-table-container">
            <table>
              <thead>
                <tr>
                  <th><i className="fas fa-question-circle" style={{ color: 'gray', marginLeft: '8px' }}></i></th>
                  <th>Transaction Hash</th>
                  <th>Method <i className="fas fa-question-circle" style={{ color: 'gray', marginLeft: '4px' }}></i></th>
                  <th>Block</th>
                  <th className="custom-color">Age</th>
                  <th>From</th>
                  <th>To</th>
                  <th className="custom-color">Amount</th>
                  <th className="custom-color">Txn Fee</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="icon-cell">
                      <div className="icon-box">
                        <i className="far fa-eye"></i>
                      </div>
                    </td>
                    <td className="custom-color">
                      {truncateString(tx.hash || '0xffebbfd38c63...', 10)} <i className="far fa-copy" style={{ color: 'gray' }}></i>
                    </td>
                    <td>
                      <span className="method-box">{tx.method || 'Transfer'}</span>
                    </td>
                    <td className="custom-color">{tx.blockNumber || 20825959}</td>
                    <td>{formatAge(7)}</td>
                    <td className="custom-color">
                      {truncateString(tx.from || 'titanbuilder.eth', 10)} <i className="far fa-copy" style={{ color: 'gray' }}></i>
                    </td>
                    <td className="custom-color">
                      <div className="arrow-icon-box">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                      {truncateString(tx.to || 'Lido: Execution Layer R...', 10)} <i className="far fa-copy" style={{ color: 'gray' }}></i>
                    </td>
                    <td>{parseFloat((tx.value || 0.064187738) / 10 ** 18).toFixed(5)} ETH</td>
                    <td style={{ fontSize: '13px', color: 'grey' }}>{parseFloat(tx.gasUsed * tx.gasPrice / 10 ** 18 || 0.00021916).toFixed(8)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              current={currentPage}
              pageSize={transactionsPerPage}
              total={transactions.length}
              onChange={handlePageChange}
              showSizeChanger={false}
              className='pagination'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
