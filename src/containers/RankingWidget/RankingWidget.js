import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";
import React, {useState} from "react";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import style from './RankingWidget.module.css'
import Ranking from "../../components/Ranking/Ranking";
export default function RankingWidget(props) {
    const criteria = [{name: "The most frequently bought", value: 1}, {name: "The least frequently bought", value: 2}]
    const [criterion, setCriterion] = useState(criteria[0]);
    const [isCriteriaMenuOpen, setCriteriaMenuOpen] = useState(false);

    const onSelect = (name) => {
        setCriterion(criteria.find(c => c.name === name));
        setCriteriaMenuOpen(false);
    }

    const onMenuClick = () => {
        setCriteriaMenuOpen((prev) => !prev);
    }

    const onClickOutside = () => {
        setCriteriaMenuOpen(false);
    }

    const criteriaButtons = criteria.filter(c => c.value !== criterion.value).map((c) =>
        <DropdownButton
            key={c.value}
            name={c.name}
            onClick={onSelect}
        />
    );

    const widgetNav = <React.Fragment>
        {/*<WidgetDropdownSelect*/}
        {/*    content={criteriaButtons}*/}
        {/*    selected={criterion.name}*/}
        {/*    isMenuOpen={isCriteriaMenuOpen}*/}
        {/*    onMenuClick={onMenuClick}*/}
        {/*    onClickOutside={onClickOutside}*/}
        {/*    width={style.width220}*/}
        {/*    label={"Display by"}*/}
        {/*/>*/}
    </React.Fragment>;

    return (
        <WidgetFrame WidgetName={t("offersMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            <Ranking />
        </WidgetFrame>
    );
}