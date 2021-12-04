import logo from './logo.svg';
import './App.css';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Dashboard />
    </div>
  );
}

export default App;
