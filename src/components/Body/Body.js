import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Space, Divider } from "antd";
import { Line } from "@ant-design/charts";
import LatestBlocks from "../LatestBlocks";
import LatestTransactions from "../LatestTransactions";
import {
  GlobalOutlined,
  DatabaseOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import getEthStats from "../../getethstats";
import getPolygonStats from "../../getpolygonstats";
import getBnbStats from "../../getbnbstats";
import "./Body.css";

const { Text } = Typography;

export default function Body({ selectedNetwork }) {
  const [ethStats, setEthStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      let stats;
      if (selectedNetwork === "eth") {
        stats = await getEthStats();
      } else if (selectedNetwork === "polygon") {
        stats = await getPolygonStats();
      } else if (selectedNetwork === "bnb") {
        stats = await getBnbStats();
      }
      setEthStats(stats);
      console.log(`${selectedNetwork.toUpperCase()} Stats:`, stats);
    };

    fetchStats();
  }, [selectedNetwork]);

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
  };

  return (
    <div className="body-container px-4">
      <div className="container mx-auto">
        <Card  className="body-card">
          <Row gutter={[16, 16]} className="body-row">
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="body-col">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Space size="large" align="center">
                  <img
                    src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
                    alt="Logo"
                    className="body-logo"
                  />
                  <div>
                    <Text className="text-color">ETHER PRICE</Text>
                    <br />
                    <Text className="text-link">
                      $2,759.34 @ 0.043106 BTC (+2.86%)
                    </Text>
                  </div>
                </Space>
                <div className="border-b"></div>
                <Space size="large" align="center">
                  <GlobalOutlined className="icon-style" />
                  <div>
                    <Text className="text-color">MARKET CAP</Text>
                    <br />
                    <Text className="text-link">$331,944,859,518.00</Text>
                  </div>
                </Space>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="body-col">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row justify="space-between" align="middle">
                  <Space size="large" align="center">
                    <DatabaseOutlined className="icon-style" />
                    <div>
                      <Text className="text-color">TRANSACTIONS</Text>
                      <br />
                      <Text className="text-link">
                        {ethStats
                          ? `${
                              ethStats.transactionCount
                            } (${ethStats.tps.toFixed(2)} TPS)`
                          : "Loading..."}
                      </Text>
                    </div>
                  </Space>
                  <div className="gas-price">
                    <Text className="text-color">MED GAS PRICE</Text>
                    <br />
                    <Text className="text-link">
                      {ethStats
                        ? `${(ethStats.gasPrice / 1e9).toFixed(3)} Gwei`
                        : "Loading..."}
                    </Text>
                  </div>
                </Row>
                <div className="border-b"></div>
                <Row justify="space-between" align="middle">
                  <Space size="large" align="center">
                    <DashboardOutlined className="icon-style" />
                    <div>
                      <Text className="text-color">LAST FINALIZED BLOCK</Text>
                      <br />
                      <Text className="text-strong">
                        {ethStats
                          ? ethStats.currentBlockNumber.toString()
                          : "Loading..."}
                      </Text>
                    </div>
                  </Space>
                  <div className="safe-block">
                    <Text className="text-color">LAST SAFE BLOCK</Text>
                    <br />
                    <Text className="text-strong">20596634</Text>
                  </div>
                </Row>
              </Space>
            </Col>

            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="chart-container">
                <Text className="text-color">
                  TRANSACTION HISTORY IN 14 DAYS
                </Text>
                <Line {...config} />
              </div>
            </Col>
          </Row>
        </Card>

        <div className="latest-section">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <LatestBlocks />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <LatestTransactions />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
