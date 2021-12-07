import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import styles from "./dashboard.module.css"
function Dashboard() {

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
      <WidgetFrame
        WidgetName={"Sales Chart"}
        OnCloseButton={OnCloseButton} />
      <WidgetFrame
        WidgetName={"Bestsellers"}
        OnCloseButton={OnCloseButton} />
      <WidgetFrame
        WidgetName={"Newest Opions"}
        OnCloseButton={OnCloseButton} />
    </div>
  );
}

export default Dashboard;