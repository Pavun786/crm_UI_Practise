import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import GetData from './GetData';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       <Main/>
       <GetData/>
    </div>
  );
}

export default App;
