import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuItemsData = {
  blockchain: [
    { key: "1", to: "/tsx", label: "Transactions" },
    { key: "2", href: "/txsPending", label: "Pending Transactions" },
    { key: "3", href: "/txsInternal", label: "Contract Internal Transactions" },
    { key: "4", href: "/txsBeaconDeposit", label: "Beacon Deposits" },
    { key: "5", href: "/txsBeaconWithdrawal", label: "Beacon Withdrawals" },
    { key: "6", href: "/txsBlobs", label: "View Blobs", divider: true },
    { key: "7", to: "/blocks", label: "View Blocks" },
    { key: "8", href: "/blocks_forked", label: "Forked Blocks (Reorgs)" },
    { key: "9", href: "/uncles", label: "Uncles", divider: true },
    { key: "10", href: "/accounts", label: "Top Accounts" },
    { key: "11", href: "/contractsVerified", label: "Verified Contracts" },
  ],
  tokens: [
    { key: "1", href: "/tokens", label: "Top Tokens (ERC-20)" },
    { key: "2", href: "/tokentxns", label: "Token Transfers (ERC-20)" },
  ],
  nfts: [
    { key: "1", href: "/nft-top-contracts", label: "Top NFTs" },
    { key: "2", href: "/nft-top-mints", label: "Top Mints" },
    { key: "3", href: "/nft-trades", label: "Latest Trades" },
    { key: "4", href: "/nft-transfers", label: "Latest Transfers" },
    { key: "5", href: "/nft-latest-mints", label: "Latest Mints" },
  ],
  resources: [
    { key: "1", href: "/charts", label: "Charts And Stats" },
    { key: "2", href: "/topstat", label: "Top Statistics" },
    { key: "3", href: "/leaderboard", label: "Leaderboard" },
    { key: "4", href: "/directory", label: "Directory" },
    { key: "5", href: "https://info.etherscan.com/newsletters/", label: "Newsletter" },
    { key: "6", href: "https://info.etherscan.com/", label: "Knowledge Base" },
  ],
  developers: [
    { key: "1", href: "/apis", label: "API Plans" },
    { key: "2", href: "https://docs.etherscan.io/", label: "API Documentation" },
    { key: "3", href: "/code-reader", label: "Code Reader" },
    { key: "4", href: "/verifyContract", label: "Verify Contract" },
    { key: "5", href: "/find-similar-contracts", label: "Similar Contract Search" },
    { key: "6", href: "/searchcontract", label: "Smart Contract Search" },
    { key: "7", href: "/contractdiffchecker", label: "Contract Diff Checker" },
    { key: "8", href: "/vyper", label: "Vyper Online Compiler" },
    { key: "9", href: "/opcode-tool", label: "Bytecode to Opcode" },
    { key: "10", href: "/pushTx", label: "Broadcast Transaction" },
  ],
  more: [
    {
      type: "group",
      label: "Tools",
      children: [
        { key: "1", href: "/unitconverter", label: "Unit Converter" },
        { key: "2", href: "/exportData", label: "CSV Export" },
        { key: "3", href: "/balancecheck-tool", label: "Account Balance Checker" },
      ],
    },
    {
      type: "group",
      label: "Explore",
      children: [
        { key: "4", href: "/gastracker", label: "Gas Tracker" },
        { key: "5", href: "/dex", label: "DEX Tracker" },
        { key: "6", href: "/nodetracker", label: "Node Tracker" },
      ],
    },
    {
      type: "group",
      label: "Services",
      children: [
        { key: "7", href: "/tokenapprovalchecker", label: "Token Approvals" },
        { key: "8", href: "/verifiedSignatures", label: "Verified Signature" },
        { key: "9", href: "/idm", label: "Input Data Messages (IDM)" },
      ],
    },
  ],
};

function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const renderDropdown = (items, label, key) => (
    <li className="header__menu-item">
      <div onClick={() => toggleDropdown(key)} className="header__menu-link">
        {label}
        <DownOutlined className="header__menu-icon header__menu-icon--down" />
      </div>
      {activeDropdown === key && (
        <ul className="header__submenu">
          {items.map((item) => (
            <li key={item.key} className="header__submenu-item">
              {item.to ? (
                <Link to={item.to} className="header__submenu-link">{item.label}</Link>
              ) : (
                <a href={item.href} className="header__submenu-link">{item.label}</a>
              )}
              {item.divider && <hr className="header__submenu-divider" />}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <header className="header container mx-auto ">
      <nav className="header__nav header__nav--cursor-pointer">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg"
            alt="Etherscan Logo"
          />
        </div>
        <div className="header__right">
          <a href="/login" className="header__right-link">
            <i className="far fa-user-circle"></i> Sign In
          </a>
          <MenuOutlined
            className="header__mobile-menu-icon"
            onClick={toggleMobileMenu}
          />
        </div>
        <div
          className={`header__menu ${mobileMenuVisible ? "" : "header__menu--mobile-hidden"}`}
        >
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="/" className="header__menu-link">
                Home
              </a>
            </li>
            {renderDropdown(menuItemsData.blockchain, "Blockchain", "blockchain")}
            {renderDropdown(menuItemsData.tokens, "Tokens", "tokens")}
            {renderDropdown(menuItemsData.nfts, "NFTs", "nfts")}
            {renderDropdown(menuItemsData.resources, "Resources", "resources")}
            {renderDropdown(menuItemsData.developers, "Developers", "developers")}
            {renderDropdown(menuItemsData.more, "More", "more")}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
