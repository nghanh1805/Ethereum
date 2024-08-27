import React from 'react';
import { Line } from '@ant-design/charts';
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';

export default function Body() {
  const data = [
    { date: "Aug 9", value: 900000 },
    { date: "Aug 16", value: 1300000 },
    { date: "Aug 23", value: 1200000 },
  ];

  const config = {
    data,
    xField: "date",
    yField: "value",
    smooth: true,
    autoFit: true,
    height: 100,
    width: 400,
  };

  return (
    <div className='h-full bg-slate-50 pb-24 '>
      <div className='border rounded-xl bg-white grid grid-cols-3 mx-4 my-5 py-5 gap-2 overflow-x-hidden ' style={{ position: 'absolute',marginTop:'-3rem '}} >
        {/* Column 1 */}
        <div className='flex flex-col border-r '>
          <div className='flex items-start space-x-4 mb-2'>
          <img className='h-9 ml-4' src='https://etherscan.io/images/svg/brands/ethereum-original.svg' alt=' Logo' />
            <div>
              <p className='text-zinc-600 text-sm'>ETHER PRICE</p>
              <p className='cursor-pointer hover:text-blue-400'>$2,759.34 @ 0.043106 BTC (+2.86%)</p>
            </div>
          </div>
          <div className='border-b border-gray-300 mt-3 mx-4'></div>
          <div className='flex items-start space-x-4 mt-4'>
            <i className='fas fa-globe text-gray-600 text-2xl ml-4'></i>
            <div>
              <p className='text-zinc-600 text-sm'>MARKET CAP</p>
              <p className='cursor-pointer hover:text-blue-400'>$331,944,859,518.00</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className='flex flex-col border-r '>
          <div className='flex mb-2 justify-between'>
            <div className='flex items-start space-x-4'>
              <i className='fas fa-server text-gray-600 text-2xl ml-4'></i>
              <div>
                <p className='text-zinc-600 text-sm'>TRANSACTIONS</p>
                <p className='cursor-pointer hover:text-blue-400'>2,485.28 M (11.9 TPS)</p>
              </div>
            </div>
            <div className='flex flex-col items-end text-right pr-3'>
              <div>
                <p className='text-zinc-600 text-sm'>MED GAS PRICE</p>
                <p className='cursor-pointer hover:text-blue-400'>0.777 Gwei ($0.05)</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300  mt-3 ml-3 mr-4'></div>
          <div className='flex justify-between'>
            <div className='flex items-start space-x-4 mt-4'>
              <i className='fas fa-tachometer-alt text-gray-600 text-2xl ml-4 '></i>
              <div>
                <p className='text-zinc-600 text-sm'>LAST FINALIZED BLOCK</p>
                <p>20596602</p>
              </div>
            </div>
            <div className='flex items-end text-right pr-3'>
              <div>
                <p className='text-zinc-600 text-sm'>LAST SAFE BLOCK</p>
                <p>20596634</p>
              </div>
            </div>
          </div>
        </div>


        {/* Column 3 and Chart */}
        <div className="flex col-span-1">
          <div className="px-2">
            <div className="text-sm mb-1 text-zinc-600">TRANSACTION HISTORY IN 14 DAYS</div>
            <Line {...config} />
          </div>
        </div>
      </div>
      <div className="">
        {/* Latest */}
      <div className="flex justify-between space-x-4 " style={{ paddingTop:'10rem'}} >
        <LatestBlocks />
        <LatestTransactions/>
      </div>
    </div>
    </div>

  );
}
