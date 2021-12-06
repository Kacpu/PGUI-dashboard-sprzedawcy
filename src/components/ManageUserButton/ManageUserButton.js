import NavHeaderButton from "../../elements/IconButton/NavHeaderButton";
import UserPng from '../../assets/icons/account-icon.png';
import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import styles from './manageUserButton.module.css';

class ManageUserButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    }

    render() {
        return (
            <div>
                <button className = {styles.accountBtn + ' ' + this.props.style}>
                    <img className={styles.imgIcon} src={UserPng}  alt={"user"}/>
                    <label className={styles.userLabel}>{this.props.username}</label>
                </button>
            </div>
        );
    }
}

export default ManageUserButton;