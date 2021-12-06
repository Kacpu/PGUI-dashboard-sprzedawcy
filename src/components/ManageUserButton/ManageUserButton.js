import NavHeaderButton from "../../elements/IconButton/NavHeaderButton";
import UserPng from '../../assets/icons/account-icon.png';
import styles from './manageUserButton.module.css';

function ManageUserButton(props) {

  var cssName = styles.accountBtn + props.className;
  return (
    <button className={cssName}>
      <img src={UserPng} className={styles.ImgIcon} />
      <label className={styles.userLabel}>{props.username}</label>
    </button>
  );
}



export default ManageUserButton;