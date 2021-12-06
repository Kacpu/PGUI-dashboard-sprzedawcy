import ManageUserButton from "../ManageUserButton/ManageUserButton";
import styles from './navigationHeader.css';
import NavHeaderButton from '../../elements/IconButton/NavHeaderButton'
import { BiMenu } from 'react-icons/bi';
import { IconContext } from "react-icons";
import MenuPng from '../../assets/icons/hamburger-menu.png';

import SettingsPng from '../../assets/icons/settings-icon.png'

function NavigationHeader() {
    function openUserMenu() {
        return (
            <div>
                <label>Menu</label>
            </div>
        );
    }

    return (
        <div className="nav-header">
            <NavHeaderButton
                className={" menu-button"}
                onClick={() => console.log("menu")}
                icon={<img src={MenuPng} alt="menu" className="img-icon"/>}
            />

            <NavHeaderButton
                className={" settings-button"}
                onClick={() => console.log("settings")}
                icon={<img src={SettingsPng} alt="user account" className="img-icon"/>}
            />

            <ManageUserButton
                className={" account-button"}
                username={"Name Surname"}
            />

        </div>
    );
}

export default NavigationHeader;