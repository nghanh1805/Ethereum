import React from 'react';
import { Layout, Button, Typography, Select } from 'antd';

const { Header } = Layout;
const { Text, Link } = Typography;
const { Option } = Select;

export default function TopBar({ selectedNetwork, onNetworkChange }) {
    return (
        <Header className="topbar-header">
            <div className="flex-container">
                <div className="text-container">
                    <Text className="text-primary">ETH Price:</Text>
                    <Link href="#" style={{ color: '#1890ff', fontSize: '13px' }}>$2,580.62</Link>
                    <Text type="danger" className="text-danger">(-3.04%)</Text>
                </div>
                <div className="text-container">
                    <i className='fas fa-gas-pump icon'></i>
                    <Text className="text-primary">Gas:</Text>
                    <Link href="#" style={{ color: '#1890ff', fontSize: '13px' }}>
                        <span>0.877</span> Gwei
                    </Link>
                </div>
            </div>

            <div className="flex-container" style={{ gap: '5px', alignItems: 'center' }}>
                <Select
                    value={selectedNetwork} 
                    style={{ width: 120 }}
                    onChange={onNetworkChange} 
                >
                    <Option value="eth">Ethereum</Option>
                    <Option value="polygon">Polygon</Option>
                    <Option value="bnb">BNB</Option>
                </Select>

                <Button className="button"
                    icon={<i className="fas fa-sun" style={{ color: '#1890ff', fontSize: '15px' }}></i>}
                />
                <Button className="button"
                    style={{
                        padding: '0.6rem 0.7rem',
                    }}>
                    <img
                        src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
                        alt="Logo"
                    />
                </Button>
            </div>
        </Header>
    );
}
