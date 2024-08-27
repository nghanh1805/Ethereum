import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaRedditAlien } from 'react-icons/fa'; // Import các icon từ react-icons
import { AiOutlineArrowUp } from 'react-icons/ai'; // Import icon mũi tên lên

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-100 py-8">
            <div className="mx-3 px-4">

                <div className="flex justify-between items-center mb-6 border-b pt-0 pb-2">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full p-2 shadow-sm">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 bg-gray-200  rounded-full p-2 shadow-sm">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 bg-gray-200   rounded-full p-2 shadow-sm">
                            <FaGithub />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 bg-gray-200   rounded-full p-2 shadow-sm">
                            <FaRedditAlien />
                        </a>
                    </div>
                    <button onClick={scrollToTop} className="flex items-center  hover:text-blue-600">
                        <AiOutlineArrowUp className="mr-1" /> Back to top
                    </button>
                </div>

                <div className="flex justify-between items-start mb-6 ">
                    <div className=" text-sm w-1/3 pr-8">
                        <p className="flex items-center mb-2">
                        <img className='h-9 mr-2' src='https://etherscan.io/images/svg/brands/ethereum-original.svg' alt=' Logo' />
                            <span className="mr-2 text-xl">Powered by Ethereum</span>

                        </p>
                        <p className='text-xs'>
                            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.
                        </p>

                    </div>

                    <div className="flex justify-between w-2/3">
                        <div className="pr-8">
                            <h4 className="font-semibold mb-2">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className=" hover:text-sky-600">About Us</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Brand Assets</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Contact Us</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Careers <span className="text-white bg-sky-700 px-2 rounded-full ">We're Hiring!</span></a></li>
                                <li><a href="#" className=" hover:text-sky-600">Terms & Privacy</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Bug Bounty</a></li>
                            </ul>
                        </div>
                        <div className="pr-8">
                            <h4 className="font-semibold mb-2">Community</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className=" hover:text-sky-600">API Documentation</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Knowledge Base</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Network Status</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Newsletters</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 ">Products & Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className=" hover:text-sky-600">Advertise</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Explorer-as-a-Service (EaaS)</a></li>
                                <li><a href="#" className=" hover:text-sky-600">API Plans</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Priority Support</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Blockscan</a></li>
                                <li><a href="#" className=" hover:text-sky-600">Blockscan Chat</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between h-3 items-center border-t pt-4 ">
                    <div className="text-center  text-sm">
                        Etherscan © 2024 (B1)
                    </div>
                    <div className="text-sm ">
                        Donations: <a href="#" className="text-blue-600 hover:text-blue-800">0x71c765...d8976f</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
