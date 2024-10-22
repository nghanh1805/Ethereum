import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Tsx.css";
import { Typography } from "antd";
import { getBlockDetails } from "./Block_API";
import { Table } from "antd";
import { ExportOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

const formatAge = (secondsAgo) => {
  return `${secondsAgo} secs ago`;
};

const truncateAddress = (address) => {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A";
};

const columns = [
  {
    title: "Block",
    dataIndex: "number",
    key: "number",
    render: (text) => <span className="custom-color">{text}</span>,
  },
  {
    title: "Slot",
    dataIndex: "slot",
    key: "slot",
    render: () => (
      <span className="custom-color">
        N/A <ExportOutlined style={{ color: "gray", marginLeft: "4px" }} />
      </span>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render: () => <span className="whitespace-nowrap ">{formatAge(7)}</span>,
  },
  {
    title: "Txn",
    dataIndex: "transactions",
    key: "transactions",
    render: (transactions) => (
      <span className="custom-color">{transactions.length}</span>
    ),
  },
  {
    title: "Fee Recipient",
    dataIndex: "miner",
    key: "miner",
    render: (miner) => (
      <a
        href={`https://etherscan.io/address/${miner}`}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-color"
      >
        {truncateAddress(miner)}
        <ExportOutlined style={{ color: "gray", marginLeft: "4px" }} />
      </a>
    ),
  },
  {
    title: "Gas Used",
    dataIndex: "gasUsed",
    key: "gasUsed",
  },
  {
    title: "Gas Limit",
    dataIndex: "gasLimit",
    key: "gasLimit",
  },
  {
    title: "Base Fee",
    dataIndex: "baseFeePerGas",
    key: "baseFeePerGas",
    render: (baseFeePerGas) => `${(baseFeePerGas / 1e9).toFixed(5)} Gwei`,
  },
  {
    title: "Reward",
    dataIndex: "reward",
    key: "reward",
    render: () => "N/A",
  },
  {
    title: "Burnt Fees (ETH)",
    dataIndex: "burntFees",
    key: "burntFees",
    render: () => "N/A",
  },
];

export default function Block() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const blockData = await getBlockDetails("latest");
      console.log(blockData);
      setBlocks([blockData]);
    };

    fetchBlocks();
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <div className="body-container px-4">
        <div className="container mx-auto">
          <h1 className="title-tsx">
            Blocks
            <hr className="custom-hr" />
          </h1>
          <Text className="ad-text">
            <strong>Sponsored:</strong>
            <img
              src="https://etherscan.io/images/gen/stake-4_20.png"
              alt="Stake"
              style={{ height: "24px", marginLeft: "8px" }}
            />
            <strong style={{ marginLeft: "8px" }}>Stake:</strong>
            <span style={{ marginLeft: "8px" }}>
              200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals -
              Provably Fair.
              <Link
                href="https://stake.mba/vi?tab=register&modal=auth&offer=butadscn5e&c=aWDbBpUc&clickId=522oEzGaCkTARxWKsuHNeG&utm_medium=cpc&utm_campaign=sb_scan5"
                className="link"
              >
                Claim Bonus
              </Link>
            </span>
          </Text>

          <div className="dashboard">
            <div className="stats-card">
              <div className="stats-title">NETWORK UTILIZATION (24H)</div>
              <div className="stats-value">50.4%</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">LAST SAFE BLOCK</div>
              <div className="stats-value">20819582</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">PRODUCED BY MEV BUILDERS (24H)</div>
              <div className="stats-value">92.4%</div>
            </div>

            <div className="stats-card">
              <div className="stats-title">BURNT FEES🔥</div>
              <div className="stats-value">4,382,815.28 ETH</div>
            </div>
          </div>

          <Table
            className="w-full overflow-x-auto mt-2"
            columns={columns}
            dataSource={blocks}
            rowKey={(record) => record.number}
            pagination={false}
            locale={{ emptyText: "No data available" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
