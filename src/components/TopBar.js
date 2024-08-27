import React from 'react';

export default function TopBar() {
    return (
        <section className='h-12 border-b flex items-center justify-between px-5 text-xs sticky top-0 bg-white z-20'>
            <div className='flex items-center space-x-4 '>
                <div className='flex items-center space-x-2 text-gray-500'>
                    <span>ETH Price:</span>
                    <a href="#" className='text-blue-500'>$2,580.62</a>
                    <span className='text-red-500'> (-3.04%)</span>
                </div>
                <div className='flex items-center space-x-2 text-xs text-gray-500'>
                    <i className='fas fa-gas-pump text-gray-400'></i>
                    <span>Gas:</span>
                    <a href='#' className='text-blue-500'>
                        <span>0.877</span> Gwei
                    </a>
                </div>
            </div>

            <div className='flex space-x-2'>
                <button className="border  rounded-lg p-[0.6rem] px-3 hover:bg-gray-200">
                    <i className="fas fa-sun text-blue-500 text-sm"></i>
                </button>
                <button className="border  rounded-lg p-[0.6rem] px-3 hover:bg-gray-200">
                    <img className='h-5' src='https://etherscan.io/images/svg/brands/ethereum-original.svg' alt=' Logo' />
                </button>
            </div>
        </section>
    );
}
