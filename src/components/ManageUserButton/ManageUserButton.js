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

    handleClick = () => {
        this.setState((prev) => ({
            isMenuOpen: !prev.isMenuOpen
        }));
    }

    render() {
        return (
            <div className={styles.dropdown}>
                <button className = {styles.accountBtn} onClick={this.handleClick}>
                    <img className={styles.imgIcon} src={UserPng}  alt={"user"}/>
                    <label className={styles.userLabel}>{this.props.username}</label>
                </button>
                {this.state.isMenuOpen ? <DropdownMenu /> : null}
            </div>
        );
    }
}

export default ManageUserButton;