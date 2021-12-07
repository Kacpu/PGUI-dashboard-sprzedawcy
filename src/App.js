import './styles/theme.css';
import './App.css';
import { Suspense, useState } from 'react';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';
import TranslationHanlder from './translation/TranslationHandler';
import "./translation/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [theme, setTheme] = useState('dark');
  const [chartWidgetOpen, setChartWidgetOpen] = useState(false);
  const [rankingWidgetOpen, setRankingWidgetOpen] = useState(false);
  const [opinionsWidgetOpen, setOpinionsWidgetOpen] = useState(false);
  const [accounts, setAccounts] = useState();

  function getUsers() {

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

  // Tłumaczenie
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");



// nie jestem pewien suspense
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
            // changeToPolish={changeToPolish}
            // changeToEnglish={changeToEnglish}
          />
          <Dashboard
            chartWidgetOpen={chartWidgetOpen}
            rankingWidgetOpen={rankingWidgetOpen}
            opinionWidgetOpen={opinionsWidgetOpen}
            manageChartWidget={manageChartWidget}
            manageOpinionsWidget={manageOpinionsWidget}
            manageRankingWidget={manageRankingWidget}
          />
          <TranslationHanlder/>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
