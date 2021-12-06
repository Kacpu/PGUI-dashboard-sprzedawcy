import NavHeaderButton from "../../elements/IconButton/NavHeaderButton";
import UserPng from '../../assets/icons/account-icon.png';
import './manageUserButton.css';

function ManageUserButton(props) {

  var cssName = "account-btn"+props.className;
  return (
    <button className = {cssName}>
      <img src={UserPng} className="img-icon" />
      <label className="user-label">{props.username}</label>
    </button>
  );
}



export default ManageUserButton;