import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState('eth'); 

  const handleNetworkChange = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="App">
      <TopBar selectedNetwork={selectedNetwork} onNetworkChange={handleNetworkChange} />
      <Header />
      <SearchBar />
      <Body selectedNetwork={selectedNetwork} />
      <Footer />
    </div>
  );
}

export default App;
