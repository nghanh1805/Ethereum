import React, { useState } from 'react';

const initialTransactions = [
  { id: '0x8cd1c1722f5d', age: '15 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.04847 Eth' },
  { id: '0x8cd1c1722f5d', age: '27 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0 Eth' },
  { id: '0x8cd1c1722f5d', age: '39 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.03 Eth' },
  { id: '0x8cd1c1722f5d', age: '51 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.02604 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.04693 Eth' },
];

const additionaTransactions = [
  { id: '0x8cd1c1722f5d', age: '1 min 12 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.03012 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min 24 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.05789 Eth' },
  { id: '0x8cd1c1722f5d', age: '1 min 36 secs ago', from: '0x4838B106...B0BAD5f97', to: '0x2beE119e...c76216E3A', reward: '0.02934 Eth' },
];

function LatestTransactions() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setTransactions([...initialTransactions, ...additionaTransactions]);
    setShowAll(true);
  };

  const handleClose = () => {
    setTransactions(initialTransactions);
    setShowAll(false);
  };

  return (
    <div className="bg-white  rounded-xl p-4 w-full border">
      <div className="flex justify-between items-center mb-4 border-b pb-5">
        <h2 className="text-base font-semibold">Latest Transactions</h2>
        <button className="text-xs hover:bg-gray-200 w-24 h-8 border rounded-md flex items-center justify-center space-x-2">
          <i className='fas fa-th'></i>
          <p>Customize</p>
        </button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center p-4 border-b pt-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center justify-center w-13 h-13 bg-gray-100 rounded-lg hover:bg-gray-200">
                <i className="fas fa-file-alt text-gray-600 text-xl"></i>
              </button>
              <div>
                <div className="text-base text-sky-600">{transaction.id}</div>
                <div className="text-xs text-gray-500">{transaction.age}</div>
              </div>
            </div>
            <div>
              <div className="text-sm flex">From<p className='text-sky-600 ml-1'>{transaction.from}</p></div>
              <div className="flex text-sm">to
                <p className='text-sky-600 ml-1'>{transaction.to}</p>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold w-20 h-6 border rounded-md text-gray-700 flex  items-center  "><p className='ml-2 '>{transaction.reward}</p></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {!showAll ? (
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <button onClick={handleViewAll} className="text-gray-600 hover:text-sky-600 text-xs font-semibold">VIEW ALL TRANSACTIONS →</button>
          </div>
        ) : (
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <button onClick={handleClose} className="text-gray-600 hover:text-sky-600 text-xs font-semibold">RETURN TRANSACTIONS</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LatestTransactions;
