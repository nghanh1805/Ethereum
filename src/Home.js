import React, { useState } from 'react';
import './Home.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Body from './components/Body';
import Footer from './components/Footer';

function Home() {
  const [selectedNetwork, setSelectedNetwork] = useState('eth'); 

  const handleNetworkChange = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Home">
      <TopBar selectedNetwork={selectedNetwork} onNetworkChange={handleNetworkChange} />
      <Header />
      <SearchBar />
      <Body selectedNetwork={selectedNetwork} />
      <Footer />
    </div>
  );
}

export default Home;
