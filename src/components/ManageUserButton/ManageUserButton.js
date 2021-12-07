import UserPng from '../../assets/icons/account-icon.png';
import React from "react";
import styles from './manageUserButton.module.css';

function ManageUserButton(props) {
    return (
        <button className={styles.accountBtn} onClick={props.onClick}>
            <img className={styles.imgIcon} src={UserPng} alt={"user"}/>
            <label className={styles.userLabel}>{props.username}</label>
        </button>
    );
}

export default ManageUserButton;