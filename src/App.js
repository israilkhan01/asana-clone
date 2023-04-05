import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
       <h1>
        App Container
       </h1>
    </div>
  );
}

export default App;
