import styles from './headBar.module.css'
import WidgetButton from "../../WidgetButton/WidgetButton";
import DropdownButton from "../../WidgetDropdownSelect/DropdownButton/DropdownButton";
import expandIcon from "../../../assets/icons/expand-icon.png";
import collapseIcon from "../../../assets/icons/collapse-icon.png";
import React from "react";

export default function HeadBar(props) {
    const soldIcon = expandIcon;
    const earningIcon = expandIcon;

    const onSold = () => {

    }

    const onEarnings = () => {

    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div></div>
                <div className={styles.labelContainer}>Name</div>
                <div className={styles.labelContainer}>
                    <DropdownButton
                        name={"Sold [pcs]"}
                        icon={soldIcon}
                        onClick={props.onClick}
                    />
                </div>
                <div className={styles.labelContainer}>
                    <DropdownButton
                        name={"Earnings [zł]"}
                        icon={earningIcon}
                        onClick={props.onClick}
                    />
                </div>
            </div>
            <hr className={styles.divider}/>
        </React.Fragment>
    );
}