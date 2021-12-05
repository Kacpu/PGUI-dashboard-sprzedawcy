import NavHeaderButton from "../../elements/IconButton/NavHeaderButton";
import UserPng from '../../assets/icons/account-icon.png';
import './manageUserButton.css';

function ManageUserButton(props) {

  var cssName = "div-btn"+props.className;
  return (
    <button className = {cssName}>
      <label>{props.username}</label>
      <img src={UserPng} />
    </button>
  );
}



export default ManageUserButton;