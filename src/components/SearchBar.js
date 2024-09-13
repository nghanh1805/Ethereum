import React from 'react';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title, Text, Link } = Typography;

function SearchBar() {
    return (
        <Content className="content">
            <div className="container">
                <h1 className="title">
                    The Ethereum Blockchain Explorer
                </h1>
                <form className="search-form" action="/search" method="GET">
                    <div className="search-box">
                        <div className="select">
                            <select
                                aria-label="Default select example"
                                className="select-element"
                            >
                                <option selected value="0">All Filters</option>
                                <option value="1">Addresses</option>
                                <option value="2">Tokens</option>
                                <option value="3">Name Tags</option>
                                <option value="6">Domain Names</option>
                                <option value="4">Labels</option>
                                <option value="5">Websites</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="search-panel" className="sr-only">Search</label>
                            <input
                                id="search-panel"
                                type="text"
                                className="input-element"
                                placeholder="Search by Address / Txn Hash / Block / Domain Name"
                            />
                        </div>

                        <div>
                            <button className="button-search" type="submit">
                                <i className="fas fa-search text-base"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <Text className="text">
                    <strong>Sponsored:</strong>
                    <img
                        src="https://etherscan.io/images/gen/stake-4_20.png"
                        alt="Stake"
                        style={{ height: '24px', marginLeft: '8px' }}
                    />
                    <strong style={{ marginLeft: '8px' }}>Stake:</strong>
                    <span style={{ marginLeft: '8px' }}>
                        200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals - Provably Fair.
                    </span>
                </Text>
                <Link href="https://stake.mba/vi?tab=register&modal=auth&offer=butadscn5e&c=aWDbBpUc&clickId=522oEzGaCkTARxWKsuHNeG&utm_medium=cpc&utm_campaign=sb_scan5" className="link">
                    Claim Bonus
                </Link>
            </div>
            <div className="ad-image">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://moonpay-affiliate-program.sjv.io/GmG56B"
                    className="relative inline-block"
                >
                    <span className="absolute bg-white text-dark shadow-sm rounded text-xs px-1" style={{ right: '.75rem', top: '-.5rem' }}>
                        Ad
                    </span>
                    <img
                        width="321"
                        height="101"
                        src="https://etherscan.io/images/gen/moonpay_aug24_321x101.png?v2"
                        alt="Ads"
                        style={{ borderRadius: '4px' }}
                    />
                </a>
            </div>
        </Content>
    );
}

export default SearchBar;
