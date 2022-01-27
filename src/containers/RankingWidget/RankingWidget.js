import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";
import React, {useState} from "react";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import style from './RankingWidget.module.css'
import Ranking from "../../components/Ranking/Ranking";
import HeadBar from "../../components/Ranking/HeadBar/HeadBar";
import {offers} from "../../mocks/OffersMock";

export default function RankingWidget(props) {
    const criteria = [{name: "mostSold", value: 1}, {name: "leastSold", value: 2},
        {name: "mostEarning", value: 3}, {name: "leastEarning", value: 4}]
    const [criterion, setCriterion] = useState(criteria[0]);

    const onCriterionChange = (value) => {
        setCriterion(criteria.find(c => c.value === value));
    }

    return (
        <WidgetFrame WidgetName={t("offersMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={<HeadBar onClick={onCriterionChange}/>}>
            <Ranking offers={offers} criterion={criterion}/>
        </WidgetFrame>
    );
}