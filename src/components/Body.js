import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Divider, Space } from 'antd';
import { Line } from '@ant-design/charts';
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';
import { GlobalOutlined, DatabaseOutlined, DashboardOutlined } from '@ant-design/icons';
import getEthStats from '../getethstats';

const { Text } = Typography;

export default function Body() {
  const [ethStats, setEthStats] = useState(null);

  useEffect(() => {

    const fetchEthStats = async () => {
      const stats = await getEthStats();
      setEthStats(stats);
      console.log("Ethereum Stats:", stats);
    };

    fetchEthStats();
  }, []);
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
    width: 350,
  };

  return (
    <div className="body-container">
      <Card
        className="body-card"
        Style={{ padding: '20px' }}
      >
        <Row gutter={16} className="body-row">
          {/* Column 1 */}
          <Col flex={1} className="body-col" style={{ paddingRight: '55px' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Space size="large" align="center">
                <img
                  src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
                  alt="Logo"
                  className="body-logo"
                />
                <div>
                  <Text className="text-color">ETHER PRICE</Text>
                  <br />
                  <Text className="text-link">$2,759.34 @ 0.043106 BTC (+2.86%)</Text>
                </div>
              </Space>
              <div className='border-b'></div>
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

          {/* Column 2 */}
          <Col flex={1} className="body-col">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Row justify="space-between" align="middle">
                <Space size="large" align="center">
                  <DatabaseOutlined className="icon-style" />
                  <div>
                    <Text className="text-color">TRANSACTIONS</Text>
                    <br />
                    <Text className="text-link">
                    {ethStats ? `${ethStats.transactionCount} (${ethStats.tps.toFixed(2)} TPS)` : 'Loading...'}
                    </Text>
                  </div>
                </Space>
                <div style={{ textAlign: 'right', paddingRight: '30px', paddingLeft: '30px' }}>
                  <Text className="text-color">MED GAS PRICE</Text>
                  <br />
                  <Text className="text-link">
                   {ethStats ? `${(ethStats.gasPrice / 1e9).toFixed(3)} Gwei` : 'Loading...'}
                  </Text>
                </div>
              </Row>
              <div className='border-b'></div>
              <Row justify="space-between" align="middle">
                <Space size="large" align="center">
                  <DashboardOutlined className="icon-style" />
                  <div>
                    <Text className="text-color">LAST FINALIZED BLOCK</Text>
                    <br />
                    <Text className="text-strong">
                      {ethStats ? ethStats.currentBlockNumber.toString() : 'Loading...'}
                    </Text>
                  </div>
                </Space>
                <div style={{ textAlign: 'right', paddingRight: '30px', paddingLeft: '50px' }}>
                  <Text className="text-color">LAST SAFE BLOCK</Text>
                  <br />
                  <Text className="text-strong">20596634</Text>
                </div>
              </Row>
            </Space>
          </Col>

          {/* Column 3 and Chart */}
          <Col flex={1}>
            <div className="chart-container">
              <Text className="text-color">TRANSACTION HISTORY IN 14 DAYS</Text>
              <Line {...config} />
            </div>
          </Col>
        </Row>
      </Card>

      <div className="latest-section">
        {/* Latest */}
        <Row gutter={16} style={{ margin: '0 16px' }} >
          <Col span={12}>
            <LatestBlocks />
          </Col>
          <Col span={12}>
            <LatestTransactions />
          </Col>
        </Row>
      </div>
    </div>
  );
}
