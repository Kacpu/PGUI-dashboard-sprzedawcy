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
import MenuWidgetItemButton from "../DropdownMenuWidgetItemButton/MenuWidgetItemButton";
import chartWidgetIcon from "../../assets/icons/chart-widget.png";
import rankingWidgetIcon from "../../assets/icons/ranking-icon.png";
import opinionsWidgetIcon from "../../assets/icons/ratings-widget-icon.png";
import { useTranslation, withTranslation } from "react-i18next";

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

    onCloseMenu = (e) => {
        console.log(e.target)
        this.setState({

        });
    }

   

    render() {
        const {t} = this.props;

        const widgetMenuButtons = [
            <MenuWidgetItemButton
                widgetIcon={chartWidgetIcon}
                widgetName={t("salesChartMenu")}
                isWidgetOpen={this.props.chartWidgetOpen}
                onClick={this.props.manageChartWidget}
            />,
            <MenuWidgetItemButton
                widgetIcon={opinionsWidgetIcon}
                widgetName={t("opinionsMenu")}
                isWidgetOpen={this.props.opinionWidgetOpen}
                onClick={this.props.manageOpinionsWidget}
            />,
            <MenuWidgetItemButton
                widgetIcon={rankingWidgetIcon}
                widgetName={t("offersMenu")}
                isWidgetOpen={this.props.rankingWidgetOpen}
                onClick={this.props.manageRankingWidget}
            />
        ];

        const userManageButtons = [
            <DropdownMenuList
                isOpen={this.state.isUsersListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={t("changeAccount")}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30" height="30"/>}
                        onClick={this.onUsersListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={t("changeAccount")}
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
                name={t("logout")}
                lastItem={null}
            />
        ]

        const settingsButtons = [
            <DropdownMenuList
                isOpen={this.state.isLanguagesListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={t("changeLang")}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30" height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={t("changeLang")}
                        lastItem={<img src={collapseIcon} className={styles.imgIcon} alt="collapse" width="30" height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                content={[
                    <ListItemButton
                        functionalIcon={polishIcon}
                        name={t("polish")}
                        onClick={this.props.changeToPolish}
                        
                    />,
                    <ListItemButton
                        functionalIcon={usaIcon}
                        name={t("english")}
                        onClick={this.props.changeToEnglish}
                    />
                ]}
            />,
            <DropdownMenuItemButton
                functionalIcon={modeIcon}
                name={t("darkMode")}
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
                    content={widgetMenuButtons}
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

export default withTranslation()(NavigationHeader);