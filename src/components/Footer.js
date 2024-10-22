import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaRedditAlien } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Layout, Button, Typography, Divider, Row, Col, Space } from 'antd';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AntFooter className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto ">
                <Row gutter={[16, 16]}  className="border-b border-gray-300 pb-4 mb-4" justify="space-between" align="middle">

                    <Space size="large">
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <FaTwitter className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <FaGithub className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <FaRedditAlien className="text-lg" />
                        </a>
                    </Space>


                    <Button type="link" onClick={scrollToTop} className="text-gray-600 hover:text-blue-500">
                        <AiOutlineArrowUp className="mr-2" /> Back to top
                    </Button>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8} className="mb-8 md:mb-0">
                        <Space align="start" className="mb-4">
                            <img className='w-8 h-8' src='https://etherscan.io/images/svg/brands/ethereum-original.svg' alt='Logo' />
                            <Title level={4} className="text-lg font-bold">Powered by Ethereum</Title>
                        </Space>
                        <Text className="text-sm text-gray-600"><br></br>
                            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.
                        </Text>
                    </Col>

                    <Col xs={24} md={16}>
                        <Row gutter={[16, 16]}>
                            <Col xs={12} sm={8}>
                                <Title level={5} className="text-base font-semibold mb-4">Company</Title>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">About Us</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Brand Assets</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Contact Us</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Careers <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2">We're Hiring!</span></a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Terms & Privacy</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Bug Bounty</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={8}>
                                <Title level={5} className="text-base font-semibold mb-4">Community</Title>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">API Documentation</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Knowledge Base</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Network Status</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Newsletters</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={8}>
                                <Title level={5} className="text-base font-semibold mb-4">Products & Services</Title>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Advertise</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Explorer-as-a-Service (EaaS)</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">API Plans</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Priority Support</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Blockscan</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500">Blockscan Chat</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Divider className="my-6" />
                <Row justify="space-between" align="middle">
                    <Text className="text-sm text-gray-600">Etherscan © 2024 (B1)</Text>
                    <Text className="text-sm text-gray-600">Donations: <Link href="#" className="text-blue-500 hover:underline">0x71c765...d8976f</Link></Text>
                </Row>
            </div>
        </AntFooter>
    );
}

export default Footer;
