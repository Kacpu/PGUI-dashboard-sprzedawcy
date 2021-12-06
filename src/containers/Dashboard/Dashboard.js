import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import "./dashboard.css"
function Dashboard(){
    return(
      <div className="dashboard-div">
      <WidgetFrame />
      <WidgetFrame />
      <WidgetFrame />
      </div>
    );
}

export default Dashboard;