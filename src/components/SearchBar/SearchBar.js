import React from "react";
import { Layout, Typography } from "antd";
const { Content } = Layout;
const { Link } = Typography;

function SearchBar() {
  return (
    <Content className="bg-[#1e293b] pt-8 pb-14 px-6" >
      <div className="container mx-auto flex justify-between items-start gap-4">
        <div className="flex flex-col w-full lg:w-3/4">
          <h1 className="text-white text-xl mb-3">The Ethereum Blockchain Explorer</h1>
          <form action="/search" method="GET" className="w-full mb-3 ">
            <div className="flex bg-white rounded-md overflow-hidden">
              <select className="px-3 py-2 border-r border-gray-200 text-sm focus:outline-none hidden sm:block">
                <option selected value="0">All Filters</option>
                <option value="1">Addresses</option>
                <option value="2">Tokens</option>
                <option value="3">Name Tags</option>
                <option value="6">Domain Names</option>
                <option value="4">Labels</option>
                <option value="5">Websites</option>
              </select>
              <input
                type="text"
                className="flex-grow px-3 py-2 text-sm focus:outline-none"
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              />
              <button type="submit" className="bg-[#0284c7] text-white px-4 py-2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <span className="text-gray-300 text-sm md:flex items-center hidden">
            <strong>Sponsored:</strong>
            <img
              src="https://etherscan.io/images/gen/stake-4_20.png"
              alt="Stake"
              className="h-6 mx-2"
            />
            <strong>EVO.io:</strong>
            1 BTC Bonus + 150 Spins ⚡ Instant Deposits, Fast Crypto Withdrawals.
          </span>
          <Link href="#" className="text-[#38bdf8] text-sm font-bold mt-2">
            Claim Now
          </Link>
        </div>
        <div className="hidden lg:block relative mt-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="inline-block"
          >
            <span className="absolute -top-2 right-3 bg-white text-black text-xs px-1 rounded">Ad</span>
            <img
              width="321"
              height="101"
              src="https://etherscan.io/images/gen/moonpay_aug24_321x101.png?v2"
              alt="Ads"
              className="rounded"
            />
          </a>
        </div>
      </div>
      
    </Content>
  );
}

export default SearchBar;