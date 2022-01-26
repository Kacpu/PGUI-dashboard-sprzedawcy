import './styles/theme.css';
import './App.css';
import {Suspense, useState} from 'react';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';
// import {users} from './mocks/Users'
import "./translation/i18n";
import {useTranslation} from "react-i18next";
import IconSwitch from "./elements/IconSwitch/IconSwitch";
import {AuthProvider, useAuth} from "./authorization/AuthProvider";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./authorization/PrivateRoute";
import LoginPage from "./pages/Login/LoginPage";
import Menu from "./containers/Menu/Menu";

function App() {
    const [theme, setTheme] = useState('light');
    const [chartWidgetOpen, setChartWidgetOpen] = useState(false);
    const [rankingWidgetOpen, setRankingWidgetOpen] = useState(false);
    const [opinionsWidgetOpen, setOpinionsWidgetOpen] = useState(false);
    // const [account, setAccount] = useState(users[0]);
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState("eng");
    const auth = useAuth();

    function changeThem() {
        //console.log(element)
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    function changeToPolish() {
        setLanguage("pol");
        i18n.changeLanguage("pol");
    }

    function changeToEnglish() {
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

    // function onChangeAccount(id) {
    //     setAccount(users.find(u => u.id === id));
    // }

    return (
        <AuthProvider>
            <Routes>
                <Route element={
                    <Menu
                        theme={theme}
                        chartWidgetOpen={chartWidgetOpen}
                        rankingWidgetOpen={rankingWidgetOpen}
                        opinionWidgetOpen={opinionsWidgetOpen}
                        manageChartWidget={manageChartWidget}
                        manageOpinionsWidget={manageOpinionsWidget}
                        manageRankingWidget={manageRankingWidget}
                        changeThem={changeThem}
                        changeToPolish={changeToPolish}
                        changeToEnglish={changeToEnglish}
                        language={language}
                    />
                }>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Dashboard
                                    chartWidgetOpen={chartWidgetOpen}
                                    rankingWidgetOpen={rankingWidgetOpen}
                                    opinionWidgetOpen={opinionsWidgetOpen}
                                    manageChartWidget={manageChartWidget}
                                    manageOpinionsWidget={manageOpinionsWidget}
                                    manageRankingWidget={manageRankingWidget}
                                />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<LoginPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
