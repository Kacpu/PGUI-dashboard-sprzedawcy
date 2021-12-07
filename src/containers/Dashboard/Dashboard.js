import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import styles from "./dashboard.module.css"
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

  return (
    <div className={styles.dashboardDiv}>
        {props.chartWidgetOpen &&
            <WidgetFrame
                WidgetName={"Sales Chart"}
                OnCloseButton={props.manageChartWidget}
            />
        }
        {props.rankingWidgetOpen &&
            <WidgetFrame
                WidgetName={"Bestsellers"}
                OnCloseButton={props.manageRankingWidget} />
        }
        {props.opinionWidgetOpen &&
            <WidgetFrame
                WidgetName={"Newest Opinions"}
                OnCloseButton={props.manageOpinionsWidget} />
        }
    </div>
  );
}

export default Dashboard;