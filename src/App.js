import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <SearchBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
