import React, { useState } from 'react';
import { Card, Button, Divider } from 'antd';
import { FileTextOutlined, AppstoreOutlined } from '@ant-design/icons';

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

  const handleViewAll = () => {
    setTransactions([...initialTransactions, ...additionalTransactions]);
    setShowAll(true);
  };

  const handleClose = () => {
    setTransactions(initialTransactions);
    setShowAll(false);
  };

  return (
    <Card className="w-full" style={{ borderRadius: '12px' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Latest Transactions</h2>
        <Button type="default" icon={<AppstoreOutlined />} size="small">Customize</Button>
      </div>
      <Divider />
      {transactions.map((transaction, index) => (
        <div key={index} className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <i className="fas fa-file-alt text-gray-600 text-xl"></i>
            <div>
              <div className="text-base text-sky-600">{transaction.id}</div>
              <div className="text-xs text-gray-500">{transaction.age}</div>
            </div>
          </div>
          <div>
            <div className="text-sm flex">From <span className='text-sky-600 ml-1'>{transaction.from}</span></div>
            <div className="flex text-sm">To <span className='text-sky-600 ml-1'>{transaction.to}</span></div>
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
