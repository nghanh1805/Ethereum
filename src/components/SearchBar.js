import React from 'react';

function SearchBar() {
    return (
        <section id='bg' className='bg-slate-800  h-[18.3rem] flex px-6 '>
            <div className='flex flex-col pt-12  w-full max-w-2xl'>
                <p className='text-xl text-white font-semibold mb-3 '>
                    The Ethereum Blockchain Explorer
                </p>
                <form className="mb-3" action="/search" method="GET">
                    <div className="bg-white border border-gray-300 rounded-md flex gap-2 p-[0.25rem]">
                        <div className="mt-[0.2rem] ">
                            <select
                                aria-label="Default select example"
                                className="form-select w-38 px-2 py-[0.25rem] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
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
                        <div className="flex-grow  mt-[0.2rem]">
                            <label htmlFor="search-panel" className="sr-only">Search</label>
                            <input
                                id="search-panel"
                                type="text"
                                className="w-full px-3 py-[0.25rem]  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                                placeholder="Search by Address / Txn Hash / Block / Domain Name"
                                
                            />
                        </div>

                        <div>
                            <button className="btn flex items-center justify-center h-9 w-9 bg-sky-600 text-white rounded-lg shadow-sm hover:bg-sky-700 transition-colors duration-300" type="submit">
                                <i className="fas fa-search text-base"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div className='text-gray-300 text-sm flex '>
                    <b>Sponsored: </b>
                    <img className='h-6 ml-2' src='https://etherscan.io/images/gen/stake-4_20.png' />
                    <b>Stake:</b>
                    <p className='ml-2'>200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals - Provably Fair.</p>
                </div>
                <div className='text-blue-400 text-sm font-bold' t><a href='https://stake.mba/vi?tab=register&modal=auth&offer=butadscn5e&c=aWDbBpUc&clickId=522oEzGaCkTARxWKsuHNeG&utm_medium=cpc&utm_campaign=sb_scan5'>Claim Bonus</a></div>
            </div>
            <div className="pt-20 ml-24">
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
                        className="rounded-md"
                    />
                </a>
            </div>
        </section>
    );
}

export default SearchBar;
