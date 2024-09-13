import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Header() {
  const menuItems = {
    blockchain: [
      {
        key: '1',
        label: <a href="/txs">Transactions</a>,
      },
      {
        key: '2',
        label: <a href="/txsPending">Pending Transactions</a>,
      },
      {
        key: '3',
        label: <a href="/txsInternal">Contract Internal Transactions</a>,
      },
      {
        key: '4',
        label: <a href="/txsBeaconDeposit">Beacon Deposits</a>,
      },
      {
        key: '5',
        label: <a href="/txsBeaconWithdrawal">Beacon Withdrawals</a>,
      },
      {
        key: '6',
        label: <a href="/txsBlobs">View Blobs</a>,
      },
      {
        key: '7',
        label: <a href="/blocks">View Blocks</a>,
      },
      {
        key: '8',
        label: <a href="/blocks_forked">Forked Blocks (Reorgs)</a>,
      },
      {
        key: '9',
        label: <a href="/uncles">Uncles</a>,
      },
      {
        key: '10',
        label: <a href="/accounts">Top Accounts</a>,
      },
      {
        key: '11',
        label: <a href="/contractsVerified">Verified Contracts</a>,
      },
    ],
    tokens: [
      {
        key: '1',
        label: <a href="/tokens">Top Tokens (ERC-20)</a>,
      },
      {
        key: '2',
        label: <a href="/tokentxns">Token Transfers (ERC-20)</a>,
      },
    ],
    nfts: [
      {
        key: '1',
        label: <a href="/nft-top-contracts">Top NFTs</a>,
      },
      {
        key: '2',
        label: <a href="/nft-top-mints">Top Mints</a>,
      },
      {
        key: '3',
        label: <a href="/nft-trades">Latest Trades</a>,
      },
      {
        key: '4',
        label: <a href="/nft-transfers">Latest Transfers</a>,
      },
      {
        key: '5',
        label: <a href="/nft-latest-mints">Latest Mints</a>,
      },
    ],
    resources: [
      {
        key: '1',
        label: <a href="/charts">Charts And Stats</a>,
      },
      {
        key: '2',
        label: <a href="/topstat">Top Statistics</a>,
      },
      {
        key: '3',
        label: <a href="/leaderboard">Leaderboard</a>,
      },
      {
        key: '4',
        label: <a href="/directory">Directory</a>,
      },
      {
        key: '5',
        label: <a href="https://info.etherscan.com/newsletters/">Newsletter</a>,
      },
      {
        key: '6',
        label: <a href="https://info.etherscan.com/">Knowledge Base</a>,
      },
    ],
    developers: [
      {
        key: '1',
        label: <a href="/apis">API Plans</a>,
      },
      {
        key: '2',
        label: <a href="https://docs.etherscan.io/">API Documentation</a>,
      },
      {
        key: '3',
        label: <a href="/code-reader">Code Reader</a>,
      },
      {
        key: '4',
        label: <a href="/verifyContract">Verify Contract</a>,
      },
      {
        key: '5',
        label: <a href="/find-similar-contracts">Similar Contract Search</a>,
      },
      {
        key: '6',
        label: <a href="/searchcontract">xsart Contract Search</a>,
      },
      {
        key: '7',
        label: <a href="/contractdiffchecker">Contract Diff Checker</a>,
      },
      {
        key: '8',
        label: <a href="/vyper">Vyper Online Compiler</a>,
      },
      {
        key: '9',
        label: <a href="/opcode-tool">Bytecode to Opcode</a>,
      },
      {
        key: '10',
        label: <a href="/pushTx">Broadcast Transaction</a>,
      },
    ],
    more: [
      {
        type: 'group',
        label: 'Tools',
        children: [
          {
            key: '1',
            label: <a href="/unitconverter">Unit Converter</a>,
          },
          {
            key: '2',
            label: <a href="/exportData">CSV Export</a>,
          },
          {
            key: '3',
            label: <a href="/balancecheck-tool">Account Balance Checker</a>,
          },
        ],
      },
      {
        type: 'group',
        label: 'Explore',
        children: [
          {
            key: '4',
            label: <a href="/gastracker">Gas Tracker</a>,
          },
          {
            key: '5',
            label: <a href="/dex">DEX Tracker</a>,
          },
          {
            key: '6',
            label: <a href="/nodetracker">Node Tracker</a>,
          },
        ],
      },
      {
        type: 'group',
        label: 'Services',
        children: [
          {
            key: '7',
            label: <a href="/tokenapprovalchecker">Token Approvals</a>,
          },
          {
            key: '8',
            label: <a href="/verifiedSignatures">Verified Signature</a>,
          },
          {
            key: '9',
            label: <a href="/idm">Input Data Messages (IDM)</a>,
          },
        ],
      },
    ],
  };

  return (
    <header className="header">
      <nav className="header-nav cursor-pointer">
        <div>
          <img
            className="header-logo"
            src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg"
            alt="Etherscan Logo"
          />
        </div>
        <div>
          <ul className="header-menu">
            <li>
              <a href="/" className="text-blue-400">
                Home
              </a>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.blockchain }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link">
                  <Space>
                    Blockchain
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.tokens }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link">
                  <Space>
                    Tokens
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.nfts }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link">
                  <Space>
                    NFTs
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.resources }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link">
                  <Space>
                    Resources
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.developers }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link">
                  <Space>
                    Developers
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems.more }} trigger={['hover']}>
                <a onClick={(e) => e.preventDefault()} className="header-link" style={{ width: '500px' }}>
                  <Space>
                    More
                    <DownOutlined className="text-xs" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="header-divider"></li>
            <li>
              <a href="/login" className="header-link">
                <i className="far fa-user-circle"></i> Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
