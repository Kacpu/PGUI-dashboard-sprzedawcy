import ManageUserButton from "../ManageUserButton/ManageUserButton";
import styles from './navigationHeader.module.css';
import NavHeaderButton from '../../elements/IconButton/NavHeaderButton'
import WidgetMenuPng from '../../assets/icons/hamburger-menu.png';
import SettingsPng from '../../assets/icons/settings-icon.png'
import DropdownMenuItemButton from "../DropdownMenuItemButton/DropdownMenuItemButton";
import changeAccountIcon from "../../assets/icons/change-user.png";
import languageIcon from "../../assets/icons/language.png";
import polishIcon from "../../assets/icons/poland-icon.png";
import usaIcon from "../../assets/icons/usa-icon.png";
import modeIcon from "../../assets/icons/dark-mode.png";
import expandIcon from "../../assets/icons/expand-icon.png";
import collapseIcon from "../../assets/icons/collapse-icon.png";
import ListItemButton from "../ListItemButton/ListItemButton";
import userIcon from "../../assets/icons/user-icon.png";
import logoutIcon from "../../assets/icons/logout.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {Component} from "react";
import DropdownMenuList from "../DropdownMenuList/DropdownMenuList";
import Switch from "../../elements/Switch/Switch";

class NavigationHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isManageUserMenuOpen: false,
            isWidgetMenuOpen: false,
            isSettingsMenuOpen: false,
            isUsersListOpen: false,
            isLanguagesListOpen: false
        };
    }

    onWidgetMenuMenuClick = () => {
        this.setState((prev) => ({
            isWidgetMenuOpen: !prev.isWidgetMenuOpen
        }));
    }

    onManageUserMenuClick = () => {
        this.setState((prev) => ({
            isManageUserMenuOpen: !prev.isManageUserMenuOpen
        }));
    }

    onSettingsMenuClick = () => {
        this.setState((prev) => ({
            isSettingsMenuOpen: !prev.isSettingsMenuOpen
        }));
    }

    onUsersListClick = () => {
        this.setState((prev) => ({
            isUsersListOpen: !prev.isUsersListOpen
        }));
    }

    onLanguagesListClick = () => {
        this.setState((prev) => ({
            isLanguagesListOpen: !prev.isLanguagesListOpen
        }));
    }

    onCloseMenu = () => {
        this.setState({

        });
    }



    render() {
        const userManageButtons = [
            <DropdownMenuList
                isOpen={this.state.isUsersListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={"Change account"}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30" height="30"/>}
                        onClick={this.onUsersListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={"Change account"}
                        lastItem={<img src={collapseIcon} className={styles.imgIcon} alt="collapse" width="30" height="30"/>}
                        onClick={this.onUsersListClick}
                    />
                }
                content={[
                    <ListItemButton
                        functionalIcon={userIcon}
                        name={"User1"}
                    />,
                    <ListItemButton
                        functionalIcon={userIcon}
                        name={"User2"}
                    />,
                    <ListItemButton
                        functionalIcon={userIcon}
                        name={"User3"}
                    />
                ]}
            />,
            <DropdownMenuItemButton
                functionalIcon={logoutIcon}
                name={"Logout"}
                lastItem={null}
            />
        ]

        const settingsButtons = [
            <DropdownMenuList
                isOpen={this.state.isLanguagesListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={"Change language"}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30" height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={"Change language"}
                        lastItem={<img src={collapseIcon} className={styles.imgIcon} alt="collapse" width="30" height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                content={[
                    <ListItemButton
                        functionalIcon={polishIcon}
                        name={"Polish"}
                    />,
                    <ListItemButton
                        functionalIcon={usaIcon}
                        name={"English"}
                    />
                ]}
            />,
            <DropdownMenuItemButton
                functionalIcon={modeIcon}
                name={"Dark mode"}
                lastItem={<Switch />}
            />
        ]

        return (
            <div className={styles.navHeader}>
                <DropdownMenu
                    dropButton={
                        <NavHeaderButton
                            style={styles.widgetMenuButton}
                            onClick={this.onWidgetMenuMenuClick}
                            icon={<img src={WidgetMenuPng}  alt="widget menu" className={styles.imgIcon}/>}
                        />
                    }
                    isOpen={this.state.isWidgetMenuOpen}
                    content={userManageButtons}
                    position={styles.rightPosition}
                    onBlur={this.onCloseMenu}
                />
                <DropdownMenu
                    dropButton={
                        <ManageUserButton
                            username={"Name Surname"}
                            onClick={this.onManageUserMenuClick}
                        />
                    }
                    isOpen={this.state.isManageUserMenuOpen}
                    content={userManageButtons}
                    contentPosition={styles.contentToRightEdge}
                    onBlur={this.onCloseMenu}
                />
                <DropdownMenu
                    dropButton={
                        <NavHeaderButton
                            style={styles.settingsButton}
                            onClick={this.onSettingsMenuClick}
                            icon={<img src={SettingsPng} alt="settings" className={styles.imgIcon}/>}
                        />
                    }
                    isOpen={this.state.isSettingsMenuOpen}
                    content={settingsButtons}
                    contentPosition={styles.contentToRightEdge}
                    onBlur={this.onCloseMenu}
                />
            </div>
        );
    }
}

export default NavigationHeader;