import logo from './logo.svg';
import './App.css';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
