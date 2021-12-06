import NavHeaderButton from "../../elements/IconButton/NavHeaderButton";
import UserPng from '../../assets/icons/account-icon.png';
import './manageUserButton.css';

function ManageUserButton(props) {

  var cssName = "div-btn"+props.className;
  return (
    <button className = {cssName}>
      <img src={UserPng} />
      <label>{props.username}</label>
    </button>
  );
}



export default ManageUserButton;