import './styles/theme.css';
import './App.css';
import { Suspense, useState } from 'react';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';
import "./translation/i18n";
import { useTranslation } from "react-i18next";

function App() {
    const [theme, setTheme] = useState('light');
    const [chartWidgetOpen, setChartWidgetOpen] = useState(false);
    const [rankingWidgetOpen, setRankingWidgetOpen] = useState(false);
    const [opinionsWidgetOpen, setOpinionsWidgetOpen] = useState(false);
    const [accounts, setAccounts] = useState();
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("eng");

    function getUsers() {

    }

    function changeThem(){
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    function changeToPolish () {
        setLanguage("pol");
        i18n.changeLanguage("pol");
    }

    function changeToEnglish () {
        setLanguage("eng");
        i18n.changeLanguage("eng");
    }

    function manageChartWidget() {
        setChartWidgetOpen((prev) => !prev);
    }

    function manageOpinionsWidget() {
        setOpinionsWidgetOpen((prev) => !prev);
    }

    function manageRankingWidget() {
        setRankingWidgetOpen((prev) => !prev);
    }

  return (
    <Suspense fallback="loading">
      <div className={`App ${theme}`}>
        <div className="content-wrap">
          <NavigationHeader
            chartWidgetOpen={chartWidgetOpen}
            rankingWidgetOpen={rankingWidgetOpen}
            opinionWidgetOpen={opinionsWidgetOpen}
            manageChartWidget={manageChartWidget}
            manageOpinionsWidget={manageOpinionsWidget}
            manageRankingWidget={manageRankingWidget}
            changeThem={changeThem}
            changeToPolish={changeToPolish}
            changeToEnglish={changeToEnglish}
          />
          <Dashboard
            chartWidgetOpen={chartWidgetOpen}
            rankingWidgetOpen={rankingWidgetOpen}
            opinionWidgetOpen={opinionsWidgetOpen}
            manageChartWidget={manageChartWidget}
            manageOpinionsWidget={manageOpinionsWidget}
            manageRankingWidget={manageRankingWidget}
          />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
