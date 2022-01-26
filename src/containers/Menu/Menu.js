import {Suspense} from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import {useAuth} from "../../authorization/AuthProvider";
import styles from './menu.module.css'

export default function Menu(props) {
    const auth = useAuth();

    return (
        <Suspense fallback="loading">
            <div className={`App ${props.theme}`} id="appDiv">
                <div className={styles.contentWrap}>
                    <NavigationHeader
                        chartWidgetOpen={props.chartWidgetOpen}
                        rankingWidgetOpen={props.rankingWidgetOpen}
                        opinionWidgetOpen={props.opinionWidgetOpen}
                        manageChartWidget={props.manageChartWidget}
                        manageOpinionsWidget={props.manageOpinionsWidget}
                        manageRankingWidget={props.manageRankingWidget}
                        changeThem={props.changeThem}
                        changeToPolish={props.changeToPolish}
                        changeToEnglish={props.changeToEnglish}
                        language={props.language}
                        chosenUser={auth.user}
                        users={auth.users}
                        onChangeAccount={auth.changeUser}
                        onLogout={auth.logout}
                    />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </Suspense>
    );
}