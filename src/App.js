import logo from './logo.svg';
import './App.css';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Playground from "./components/TestPlayground/Playground"
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Dashboard />
      {/* <Playground /> */}
      <Footer />
    </div>
  );
}

export default App;
