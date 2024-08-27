import React, { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="h-14 border-b bg-white" >
      <nav className="flex items-center justify-between h-full px-4">
        <div>
          <img
            className="h-9"
            src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg"
            alt="Etherscan Logo"
          />
        </div>
        <div>
          <ul className="flex space-x-4 mr-5 text-base">
            <li className="cursor-pointer text-blue-400">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            {/* Blockchain Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('blockchain')}
              >
                Blockchain
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'blockchain' && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-48">
                  <li className="p-2 hover:bg-gray-100 text-sm ">
                    <a href="/txs">Transactions</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/txsPending">Pending Transactions</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/txsInternal">Contract Internal Transactions</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/txsBeaconDeposit">Beacon Deposits</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/txsBeaconWithdrawal">Beacon Withdrawals</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 border-b text-sm">
                    <a href="/txsBlobs">View Blobs</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/blocks">View Blocks</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/blocks_forked">Forked Blocks (Reorgs)</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 border-b text-sm">
                    <a href="/uncles">Uncles</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/accounts">Top Accounts</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/contractsVerified">Verified Contracts</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Tokens Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('tokens')}
              >
                Tokens
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'tokens' && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-48">
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/tokens">Top Tokens (ERC-20)</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/tokentxns">Token Transfers (ERC-20)</a>
                  </li>
                </ul>
              )}
            </li>

            {/* NFTs Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('nfts')}
              >
                NFTs
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'nfts' && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-48">
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/nft-top-contracts">Top NFTs</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/nft-top-mints">Top Mints</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/nft-trades">Latest Trades</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/nft-transfers">Latest Transfers</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-sm">
                    <a href="/nft-latest-mints">Latest Mints</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Resources Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('resources')}
              >
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'resources' && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-48 text-sm">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/charts">Charts And Stats</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/topstat">Top Statistics</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 border-b">
                    <a href="/leaderboard">Leaderboard</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/directory">Directory</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="https://info.etherscan.com/newsletters/">Newsletter</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="https://info.etherscan.com/">Knowledge Base</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Developers Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('developers')}
              >
                Developers
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'developers' && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-48 text-sm">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/apis">API Plans</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 border-b">
                    <a href="https://docs.etherscan.io/">API Documentation</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/code-reader">Code Reader</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/verifyContract">Verify Contract</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/find-similar-contracts">Similar Contract Search</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/searchcontract">Smart Contract Search</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 border-b">
                    <a href="/contractdiffchecker">Contract Diff Checker</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/vyper">Vyper Online Compiler</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/opcode-tool">Bytecode to Opcode</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/pushTx">Broadcast Transaction</a>
                  </li>
                </ul>
              )}
            </li>

            {/* More Dropdown */}
            <li className="relative">
              <span
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleMenu('more')}
              >
                More
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {openMenu === 'more' && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 z-10 w-80 p-4 text-sm">
                  <div className="flex justify-between">
                    <div>
                      <h6 className="font-semibold mb-2">Tools</h6>
                      <ul>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/unitconverter">
                            <i className="far fa-arrows-rotate"></i> Unit Converter
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/exportData">
                            <i className="far fa-download"></i> CSV Export
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/balancecheck-tool">
                            <i className="far fa-file-invoice-dollar"></i> Account Balance Checker
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2">Explore</h6>
                      <ul>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/gastracker">
                            <i className="far fa-gas-pump"></i> Gas Tracker
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/dex">
                            <i className="far fa-arrow-right-arrow-left"></i> DEX Tracker
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/nodetracker">
                            <i className="far fa-server"></i> Node Tracker
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2">Services</h6>
                      <ul>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/tokenapprovalchecker">
                            <i className="far fa-shield-keyhole"></i> Token Approvals
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/verifiedSignatures">
                            <i className="far fa-signature-lock"></i> Verified Signature
                          </a>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <a href="/idm">
                            <i className="far fa-message-lines"></i> Input Data Messages (IDM)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="border-l"></li>
            <li className="cursor-pointer hover:text-blue-400">
              <a href="/login">
                <i className="far fa-user-circle mr-1"></i> Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
