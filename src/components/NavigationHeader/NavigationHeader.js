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
import {useTranslation, withTranslation} from "react-i18next";
import React from "react";

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

    onWidgetMenuClickOutside = () => {
        this.setState({
            isWidgetMenuOpen: false
        });
    }

    onManageUserMenuClickOutside = () => {
        this.setState({
            isManageUserMenuOpen: false,
            isUsersListOpen: false
        });
    }

    onSettingsMenuClickOutside = () => {
        this.setState({
            isSettingsMenuOpen: false,
            isLanguagesListOpen: false
        });
    }

    onUsersListItemClick = (value) => {
        this.props.onChangeAccount(value);
        this.onManageUserMenuClickOutside();
    }

    onLanguagesListItemClick = (f) => {
        f();
        this.onSettingsMenuClickOutside();
    }

    onWidgetMenuItemClick = (f) => {
        f();
        this.onWidgetMenuClickOutside();
    }

    isPolish = () => {
        if (this.props.language === 'pol') {
            return true;
        }
    }

    isEnglish = () => {
        if (this.props.language === 'eng') {
            return true;
        }
    }

    render() {
        const {t} = this.props;
        const widgetMenuButtons = [
            <MenuWidgetItemButton
                widgetIcon={chartWidgetIcon}
                widgetName={t("salesChartMenu")}
                isWidgetOpen={this.props.chartWidgetOpen}
                param={this.props.manageChartWidget}
                onClick={this.onWidgetMenuItemClick}
            />,
            <MenuWidgetItemButton
                widgetIcon={opinionsWidgetIcon}
                widgetName={t("opinionsMenu")}
                isWidgetOpen={this.props.opinionWidgetOpen}
                param={this.props.manageOpinionsWidget}
                onClick={this.onWidgetMenuItemClick}
            />,
            <MenuWidgetItemButton
                widgetIcon={rankingWidgetIcon}
                widgetName={t("offersMenu")}
                isWidgetOpen={this.props.rankingWidgetOpen}
                param={this.props.manageRankingWidget}
                onClick={this.onWidgetMenuItemClick}
            />
        ];

        const userManageButtons = [
            <DropdownMenuList
                isOpen={this.state.isUsersListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={t("changeAccount")}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30"
                                       height="30"/>}
                        onClick={this.onUsersListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={changeAccountIcon}
                        name={t("changeAccount")}
                        lastItem={<img src={collapseIcon} className={styles.imgIcon} alt="collapse" width="30"
                                       height="30"/>}
                        onClick={this.onUsersListClick}
                    />
                }
                content={ this.props.chosenUser &&
                    this.props.users.filter(u => u.id !== this.props.chosenUser.id).map(u =>
                        <ListItemButton
                            key={u.id}
                            functionalIcon={userIcon}
                            name={u.name}
                            param={u.id}
                            onClick={this.onUsersListItemClick}
                        />
                    )
                }
            />,
            <DropdownMenuItemButton
                functionalIcon={logoutIcon}
                name={t("logout")}
                lastItem={null}
                onClick={this.props.onLogout}
            />
        ]

        const settingsButtons = [
            <DropdownMenuList
                isOpen={this.state.isLanguagesListOpen}
                expandButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={t("changeLang")}
                        lastItem={<img src={expandIcon} className={styles.imgIcon} alt="expand" width="30"
                                       height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                collapseButton={
                    <DropdownMenuItemButton
                        functionalIcon={languageIcon}
                        name={t("changeLang")}
                        lastItem={<img src={collapseIcon} className={styles.imgIcon} alt="collapse" width="30"
                                       height="30"/>}
                        onClick={this.onLanguagesListClick}
                    />
                }
                content={[
                    <ListItemButton
                        functionalIcon={polishIcon}
                        name={t("polish")}
                        param={this.props.changeToPolish}
                        onClick={this.onLanguagesListItemClick}
                        type={"language"}
                        isChosen={this.isPolish()}
                    />,
                    <ListItemButton
                        functionalIcon={usaIcon}
                        name={t("english")}
                        param={this.props.changeToEnglish}
                        onClick={this.onLanguagesListItemClick}
                        type={"language"}
                        isChosen={this.isEnglish()}
                    />
                ]}
            />,
            <DropdownMenuItemButton
                functionalIcon={modeIcon}
                name={t("darkMode")}
                lastItem={<Switch onClick={this.props.changeThem}/>}
            />
        ]

        return (
            <div className={styles.navHeader}>
                {
                    this.props.chosenUser &&
                    <React.Fragment>
                        <DropdownMenu
                            dropButton={
                                <NavHeaderButton
                                    style={styles.widgetMenuButton}
                                    onClick={this.onWidgetMenuMenuClick}
                                    icon={<img src={WidgetMenuPng} alt="widget menu" className={styles.imgIcon}/>}
                                />
                            }
                            isOpen={this.state.isWidgetMenuOpen}
                            content={widgetMenuButtons}
                            position={styles.rightPosition}
                            onClickOutside={this.onWidgetMenuClickOutside}
                        />
                        <DropdownMenu
                            dropButton={
                                <ManageUserButton
                                    username={this.props.chosenUser.name}
                                    onClick={this.onManageUserMenuClick}
                                />
                            }
                            isOpen={this.state.isManageUserMenuOpen}
                            content={userManageButtons}
                            contentPosition={styles.contentToRightEdge}
                            onClickOutside={this.onManageUserMenuClickOutside}
                        />
                    </React.Fragment>
                }
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
                    onClickOutside={this.onSettingsMenuClickOutside}
                />
            </div>
        );
    }
}

export default withTranslation()(NavigationHeader);