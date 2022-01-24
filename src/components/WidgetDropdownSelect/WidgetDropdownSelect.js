import DropdownMenuList from "../DropdownMenuList/DropdownMenuList";
import style from './WidgetDropdownSelect.module.css'
import {useEffect, useRef, useState} from "react";
import React from "react";
import DropdownButton from "./DropdownButton/DropdownButton";
import {t} from "i18next";
import expandIcon from "../../assets/icons/expand-icon.png";
import collapseIcon from "../../assets/icons/collapse-icon.png";

export default function WidgetDropdownSelect(props) {
    const expandButton =
        <DropdownButton
            name={t(props.selected)}
            icon={expandIcon}
            onClick={props.onMenuClick}
        />

    const collapseButton =
        <DropdownButton
            name={t(props.selected)}
            icon={collapseIcon}
            onClick={props.onMenuClick}
        />

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (props.isMenuOpen && ref.current && !ref.current.contains(event.target))
        {
            props.onClickOutside && props.onClickOutside();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    return (
        <div className={style.container}>
            <DropdownMenuList
                dropdownRef={ref}
                isOpen={props.isMenuOpen}
                expandButton={expandButton}
                collapseButton={collapseButton}
                content={props.content}
                mainButtonStyle={style.mainButton}
                contentStyle={style.dropdownContent}
                width={props.width}
            />
        </div>

    );
}