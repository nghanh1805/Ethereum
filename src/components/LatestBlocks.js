import React, { useState } from 'react';
import { Card, Button, Divider } from 'antd';
import { AppstoreOutlined, AppstoreAddOutlined } from '@ant-design/icons';

const initialBlocks = [
  { id: 20599269, age: '15 secs ago', feeRecipient: 'Titan Builder', txns: '209 txns', reward: '0.04847 Eth' },
  { id: 20599268, age: '27 secs ago', feeRecipient: 'Titan Builder', txns: '226 txns', reward: '0.22659 Eth' },
  { id: 20599267, age: '39 secs ago', feeRecipient: 'beaverbuild', txns: '157 txns', reward: '0.03364 Eth' },
  { id: 20599266, age: '51 secs ago', feeRecipient: 'beaverbuild', txns: '212 txns', reward: '0.08075 Eth' },
  { id: 20599265, age: '1 min ago', feeRecipient: 'beaverbuild', txns: '102 txns', reward: '0.02604 Eth' },
  { id: 20599264, age: '1 min ago', feeRecipient: 'Titan Builder', txns: '191 txns', reward: '0.04693 Eth' },
];

const additionalBlocks = [
  { id: 20599263, age: '1 min 12 secs ago', feeRecipient: 'beaverbuild', txns: '156 txns', reward: '0.03012 Eth' },
  { id: 20599262, age: '1 min 24 secs ago', feeRecipient: 'Titan Builder', txns: '143 txns', reward: '0.05789 Eth' },
  { id: 20599261, age: '1 min 36 secs ago', feeRecipient: 'beaverbuild', txns: '176 txns', reward: '0.02934 Eth' },
];

function LatestBlocks() {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setBlocks([...initialBlocks, ...additionalBlocks]);
    setShowAll(true);
  };

  const handleClose = () => {
    setBlocks(initialBlocks);
    setShowAll(false);
  };

  return (
    <Card className="w-full" style={{borderRadius:'12px'}}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Latest Blocks</h2>
        <Button type="default" icon={<AppstoreAddOutlined />} size="small">Customize</Button>
      </div>
      <Divider />
      {blocks.map((block) => (
        <div key={block.id} className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
          <i className="fas fa-cube text-gray-600 text-xl"></i>
            <div>
              <div className="text-base text-sky-600">{block.id}</div>
              <div className="text-xs text-gray-500">{block.age}</div>
            </div>
          </div>
          <div>
            <div className="text-sm flex">Fee Recipient <span className='text-sky-600 ml-1'>{block.feeRecipient}</span></div>
            <div className="flex text-sm">
              <span className='text-sky-600'>{block.txns}</span>
              <span className=' text-gray-500 ml-1'>in 12 secs</span>
            </div>
          </div>
          <div className="text-xs font-bold w-20 h-6 border rounded-md text-gray-700 flex items-center justify-center">{block.reward}</div>
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

export default LatestBlocks;
