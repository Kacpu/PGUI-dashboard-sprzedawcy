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
        OnCloseButton={OnCloseButton} />
      <WidgetFrame
        OnCloseButton={OnCloseButton} />
      <WidgetFrame
        OnCloseButton={OnCloseButton} />
    </div>
  );
}

export default Dashboard;