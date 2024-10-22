import {
  ArrowRightOutlined,
  CopyOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Table, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "./Tsx.css";
import { getTransactions } from "./Tsx_API";

const { Text, Link } = Typography;

const truncateString = (str, maxLength) => {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};

const formatAge = (secondsAgo) => {
  return `${secondsAgo} secs ago`;
};

export default function Tsx() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(20);

  useEffect(() => {
    const fetchTransactions = async () => {
      const txData = await getTransactions(
        "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"
      );
      setTransactions(txData);
    };

    fetchTransactions();
  }, []);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      title: (
        <Tooltip title="Click to see more details">
          <QuestionCircleOutlined style={{ color: "gray" }} />
        </Tooltip>
      ),
      dataIndex: "icon",
      key: "icon",
      render: () => (
        <div
          className="icon-box"
          style={{ width: "40px", textAlign: "center" }}
        >
          <EyeOutlined />
        </div>
      ),
    },
    {
      title: "Transaction Hash",
      dataIndex: "hash",
      key: "hash",
      render: (text) => (
        <span
          className="custom-color"
          style={{
            maxWidth: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {truncateString(text || "0xffebbfd38c63...", 10)}{" "}
          <CopyOutlined style={{ color: "gray" }} />
        </span>
      ),
    },
    {
      title: () => (
        <span>
          Method{" "}
          <Tooltip title="Contract execution method">
            <QuestionCircleOutlined
              style={{ color: "gray", marginLeft: "4px" }}
            />
          </Tooltip>
        </span>
      ),
      dataIndex: "method",
      key: "method",
      render: (text) => (
        <span
          className="method-box"
          style={{
            maxWidth: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {text || "Transfer"}
        </span>
      ),
    },
    {
      title: "Block",
      dataIndex: "blockNumber",
      key: "blockNumber",
      render: (text) => (
        <span
          className="custom-color"
          style={{
            maxWidth: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {text || 20825959}
        </span>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => (
        <span
          style={{
            maxWidth: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {formatAge(7)}
        </span>
      ),
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      render: (text) => (
        <span
          className="custom-color"
          style={{
            maxWidth: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {truncateString(text || "titanbuilder.eth", 10)}{" "}
          <CopyOutlined style={{ color: "gray" }} />
        </span>
      ),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      render: (text) => (
        <span
          className="custom-color"
          style={{
            maxWidth: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <ArrowRightOutlined className="arrow-icon-box" />
          {truncateString(text || "Lido: Execution Layer R...", 10)}{" "}
          <CopyOutlined style={{ color: "gray" }} />
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "value",
      key: "value",
      render: (text) =>
        `${parseFloat((text || 0.064187738) / 10 ** 18).toFixed(5)} ETH`,
    },
    {
      title: "Txn Fee",
      dataIndex: "txnFee",
      key: "txnFee",
      render: (_, record) => (
        <Text
          style={{
            fontSize: "13px",
            color: "grey",
            maxWidth: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {parseFloat(
            (record.gasUsed * record.gasPrice) / 10 ** 18 || 0.00021916
          ).toFixed(8)}
        </Text>
      ),
    },
  ];

  return (
    <>
      <TopBar />
      <Header />
      <div className="body-container px-4">
        <div className="container mx-auto">
          <h1 className="title-tsx">
            Transactions
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
              <div className="stats-title">TRANSACTIONS (24H)</div>
              <div className="stats-value">
                1,135,378{" "}
                <span className="stats-percentage" style={{ color: "green" }}>
                  (6.73%)
                </span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">PENDING TRANSACTIONS (LAST 1H)</div>
              <div className="stats-value">
                156,465 <span className="stats-percentage">(Average)</span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">NETWORK TRANSACTIONS FEE (24H)</div>
              <div className="stats-value">
                766.69 <span>ETH</span>
                <span className="stats-percentage" style={{ color: "green" }}>
                  (30.78%)
                </span>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-title">AVG. TRANSACTION FEE (24H)</div>
              <div className="stats-value">
                7.02 <span>USD</span>
                <span className="stats-percentage" style={{ color: "green" }}>
                  (69.71%)
                </span>
              </div>
            </div>
          </div>

            <Table
            className="w-full overflow-x-auto"
              style={{ marginTop: "20px" }}
            columns={columns}
            dataSource={currentTransactions}
            pagination={{
              current: currentPage,
              pageSize: transactionsPerPage,
              total: transactions.length,
              onChange: handlePageChange,
              showSizeChanger: false,
              className: "pagination",
            }}
            rowKey={(record, index) => index}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
