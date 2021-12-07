import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import styles from "./dashboard.module.css";
import { useTranslation } from "react-i18next";
function Dashboard(props) {

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
            <WidgetFrame
                WidgetName={t("salesChartMenu")}
                OnCloseButton={props.manageChartWidget}
            />
        }
        {props.rankingWidgetOpen &&
            <WidgetFrame
                WidgetName={t("offersMenu")}
                OnCloseButton={props.manageRankingWidget} />
        }
        {props.opinionWidgetOpen &&
            <WidgetFrame
                WidgetName={t("opinionsMenu")}
                OnCloseButton={props.manageOpinionsWidget} />
        }
    </div>
  );
}

export default Dashboard;