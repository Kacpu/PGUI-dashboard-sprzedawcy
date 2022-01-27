import styles from './headBar.module.css'
import WidgetButton from "../../WidgetButton/WidgetButton";
import DropdownButton from "../../WidgetDropdownSelect/DropdownButton/DropdownButton";
import expandIcon from "../../../assets/icons/expand-icon.png";
import collapseIcon from "../../../assets/icons/collapse-icon.png";
import React from "react";

export default function HeadBar(props) {
    
    let soldIcon = expandIcon;
    let earningIcon = expandIcon;

    const onSold = () => {
        if(soldIcon === expandIcon){
            console.log("aaa")
            props.onClick(2);
            soldIcon = collapseIcon;
        } else {
            props.onClick(1);
            soldIcon = expandIcon;
        }
    }

    const onEarnings = () => {
        if(soldIcon === expandIcon){
            props.onClick(4);
            soldIcon = collapseIcon;
        } else {
            props.onClick(3);
            soldIcon = expandIcon;
        }
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
                        onClick={onSold}
                    />
                </div>
                <div className={styles.labelContainer}>
                    <DropdownButton
                        name={"Earnings [zł]"}
                        icon={earningIcon}
                        onClick={onEarnings}
                    />
                </div>
            </div>
            <hr className={styles.divider}/>
        </React.Fragment>
    );
}