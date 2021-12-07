import logo from './logo.svg';
import './styles/theme.css';
import './App.css';
import {useState} from 'react';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Playground from "./components/TestPlayground/Playground"
import Footer from './components/Footer/Footer';

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <div className={`App ${theme}`}>
      <NavigationHeader />
      <Dashboard />
      {/* <Playground /> */}
      <Footer />
    </div>
  );
}

export default App;
