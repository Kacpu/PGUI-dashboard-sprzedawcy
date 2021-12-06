import ManageUserButton from "../ManageUserButton/ManageUserButton";
import styles from './navigationHeader.module.css';
import NavHeaderButton from '../../elements/IconButton/NavHeaderButton'
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
        <div className={styles.navHeader}>
            <NavHeaderButton
                className={" menuButton"}
                onClick={() => console.log("menu")}
                icon={<img src={MenuPng} alt="menu" className={styles.imgIcon}/>}
            />

            <NavHeaderButton
                className={" settingsButton"}
                onClick={() => console.log("settings")}
                icon={<img src={SettingsPng} alt="user account" className={styles.imgIcon}/>}
            />

            <ManageUserButton
                className={" accountButton"}
                username={"Name Surname"}
            />

        </div>
    );
}

export default NavigationHeader;