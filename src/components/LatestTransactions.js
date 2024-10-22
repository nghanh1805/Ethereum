import { AppstoreOutlined } from '@ant-design/icons';
import { Button, Card, Divider } from 'antd';
import React, { useEffect, useState } from 'react';

const initialTransactions = [
  { id: '0x8cd1c1722f5d', age: '15 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.04847 Eth' },
  { id: '0x8cd1c1722f5d', age: '27 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0 Eth' },
  { id: '0x8cd1c1722f5d', age: '39 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.03 Eth' },
  { id: '0x8cd1c1722f5d', age: '51 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.02604 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.04693 Eth' },
];

const additionalTransactions = [
  { id: '0x8cd1c1722f5d', age: '1 min 12 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.03012 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min 24 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.05789 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min 36 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.02934 Eth' },
];

function LatestTransactions() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewAll = () => {
    setTransactions([...initialTransactions, ...additionalTransactions]);
    setShowAll(true);
  };

  const handleClose = () => {
    setTransactions(initialTransactions);
    setShowAll(false);
  };

  return (
    <Card id='card' className="w-full" style={{ borderRadius: '12px' }}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-base font-semibold mb-2 sm:mb-0">Latest Transactions</h2>
        <Button type="default" icon={<AppstoreOutlined />} size="small">Customize</Button>
      </div>
      <Divider />
      {transactions.map((transaction, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <i className="fas fa-file-alt text-gray-600 text-xl"></i>
            <div>
              <div className="text-base text-sky-600">{isMobile ? transaction.id.slice(0, 10) + '...' : transaction.id.slice(0, 8)}</div>
              <div className="text-xs text-gray-500">{transaction.age}</div>
            </div>
          </div>
          <div className="mb-2 sm:mb-0">
            <div className="text-sm flex flex-col lg:flex-row">From <span className='text-sky-600 ml-1'>{!isMobile ? transaction.from.slice(0, 10) + '...' : transaction.from}</span></div>
            <div className="flex text-sm flex-col lg:flex-row">To <span className='text-sky-600 ml-1'>{!isMobile ? transaction.to.slice(0, 10) + '...' : transaction.to}</span></div>
          </div>
          <div className="text-xs font-bold w-20 h-6 border rounded-md text-gray-700 flex items-center justify-center">{transaction.reward}</div>
        </div>
      ))}
      <Divider />
      <div className="flex justify-center items-center">
        {!showAll ? (
          <button onClick={handleViewAll} className="text-gray-600 hover:text-sky-600 text-xs font-semibold">VIEW ALL TRANSACTIONS →</button>
        ) : (
          <button onClick={handleClose} className="text-gray-600 hover:text-sky-600 text-xs font-semibold">RETURN TRANSACTIONS</button>
        )}
      </div>
    </Card>
  );
}

export default LatestTransactions;
