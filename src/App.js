import './styles/theme.css';
import './App.css';
import {useState} from 'react';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';

function App() {
    const [theme, setTheme] = useState('light');
    const [chartWidgetOpen, setChartWidgetOpen] = useState(false);
    const [rankingWidgetOpen, setRankingWidgetOpen] = useState(false);
    const [opinionsWidgetOpen, setOpinionsWidgetOpen] = useState(false);
    const [accounts, setAccounts] = useState();

    function getUsers(){

    }

    function manageChartWidget() {
        setChartWidgetOpen(!chartWidgetOpen);
    }

    function manageOpinionsWidget() {
        setOpinionsWidgetOpen(!opinionsWidgetOpen);
    }

    function manageRankingWidget() {
        setRankingWidgetOpen(!rankingWidgetOpen);
    }

  return (
    <div className={`App ${theme}`}>
      <NavigationHeader
          chartWidgetOpen={chartWidgetOpen}
          rankingWidgetOpen={rankingWidgetOpen}
          opinionWidgetOpen={opinionsWidgetOpen}
          manageChartWidget={manageChartWidget}
          manageOpinionsWidget={manageOpinionsWidget}
          manageRankingWidget={manageRankingWidget}
      />
      <Dashboard
          chartWidgetOpen={chartWidgetOpen}
          rankingWidgetOpen={rankingWidgetOpen}
          opinionWidgetOpen={opinionsWidgetOpen}
          manageChartWidget={manageChartWidget}
          manageOpinionsWidget={manageOpinionsWidget}
          manageRankingWidget={manageRankingWidget}
      />
      <Footer />
    </div>
  );
}

export default App;
