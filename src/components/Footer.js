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
        <AntFooter className="ant-footer">
            <div className="footer-container">
                <Row justify="space-between" align="middle" className="footer-row border-b">
                    <Space>
                        <a href="#" className="social-link">
                            <FaFacebookF style={{ fontSize: '16px' }} />
                        </a>
                        <a href="#" className="social-link">
                            <FaTwitter style={{ fontSize: '16px' }} />
                        </a>
                        <a href="#" className="social-link">
                            <FaGithub style={{ fontSize: '16px' }} />
                        </a>
                        <a href="#" className="social-link">
                            <FaRedditAlien style={{ fontSize: '16px' }} />
                        </a>
                    </Space>
                    <Button type="link" onClick={scrollToTop} className="back-to-top-button">
                        <AiOutlineArrowUp style={{ marginRight: '8px' }} /> Back to top
                    </Button>
                </Row>

                <Row justify="space-between" align="top" className="footer-row">
                    <Col span={8}>
                        <div>
                            <Space align="start">
                                <img className='footer-logo' src='https://etherscan.io/images/svg/brands/ethereum-original.svg' alt='Logo' />
                                <Title level={4} className="footer-title">Powered by Ethereum</Title>
                            </Space>
                            <div>
                                <Text className="footer-text">
                                    Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.
                                </Text>
                            </div>
                        </div>
                    </Col>

                    <Col span={16}>
                        <Row>
                            <Col span={8}>
                                <Title level={5} className="footer-title">Company</Title>
                                <ul className="footer-ul">
                                    <li><a href="#" className="footer-link">About Us</a></li>
                                    <li><a href="#" className="footer-link">Brand Assets</a></li>
                                    <li><a href="#" className="footer-link">Contact Us</a></li>
                                    <li><a href="#" className="footer-link">Careers <span className="footer-hiring-badge">We're Hiring!</span></a></li>
                                    <li><a href="#" className="footer-link">Terms & Privacy</a></li>
                                    <li><a href="#" className="footer-link">Bug Bounty</a></li>
                                </ul>
                            </Col>
                            <Col span={8}>
                                <Title level={5} className="footer-title">Community</Title>
                                <ul className="footer-ul">
                                    <li><a href="#" className="footer-link">API Documentation</a></li>
                                    <li><a href="#" className="footer-link">Knowledge Base</a></li>
                                    <li><a href="#" className="footer-link">Network Status</a></li>
                                    <li><a href="#" className="footer-link">Newsletters</a></li>
                                </ul>
                            </Col>
                            <Col span={8}>
                                <Title level={5} className="footer-title">Products & Services</Title>
                                <ul className="footer-ul ">
                                    <li><a href="#" className="footer-link">Advertise</a></li>
                                    <li><a href="#" className="footer-link">Explorer-as-a-Service (EaaS)</a></li>
                                    <li><a href="#" className="footer-link">API Plans</a></li>
                                    <li><a href="#" className="footer-link">Priority Support</a></li>
                                    <li><a href="#" className="footer-link">Blockscan</a></li>
                                    <li><a href="#" className="footer-link">Blockscan Chat</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Divider className="footer-divider" />
                <Row justify="space-between" align="middle">
                    <Text className="footer-bottom-text">Etherscan © 2024 (B1)</Text>
                    <Text className="footer-bottom-text">Donations: <Link href="#" className="footer-bottom-text">0x71c765...d8976f</Link></Text>
                </Row>
            </div>
        </AntFooter>
    );
}

export default Footer;
