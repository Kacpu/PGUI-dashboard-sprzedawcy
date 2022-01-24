import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import styles from "./dashboard.module.css";
import {useTranslation} from "react-i18next";
import OpinionsWidget from "../OpinionsWidget/OpinionsWidget";
import ChartWidget from "../ChartWidget/ChartWidget";
import RankingWidget from "../RankingWidget/RankingWidget";

export default function Dashboard(props) {

    // let WidgetArray = [
    //   { id: 1, widget: <WidgetFrame OnCloseButton={OnCloseButton} /> },
    //   { id: 2, widget: <WidgetFrame OnCloseButton={OnCloseButton} /> },
    //   { id: 3, widget: <WidgetFrame OnCloseButton={OnCloseButton} /> }
    // ]
    // const OnCloseButton = (widgetFrame) => {
    //   widgetFrame.style=styles.hiddenFrame
    // }

    const OnCloseButton = () => {
        console.log("close widget");
    }

    const {t, i18n} = useTranslation();

    return (
        <div className={styles.dashboardDiv}>
            {props.chartWidgetOpen &&
                <ChartWidget OnCloseButton={props.manageChartWidget}/>
            }
            {props.rankingWidgetOpen &&
                <RankingWidget OnCloseButton={props.manageRankingWidget}/>
            }
            {props.opinionWidgetOpen &&
                <OpinionsWidget OnCloseButton={props.manageOpinionsWidget}/>
            }
        </div>
    );
}
