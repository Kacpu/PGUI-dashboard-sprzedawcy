import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import styles from "./dashboard.module.css"
function Dashboard(){
    return(
      <div className={styles.dashboardDiv}>
      <WidgetFrame />
      <WidgetFrame />
      <WidgetFrame />
      </div>
    );
}

export default Dashboard;