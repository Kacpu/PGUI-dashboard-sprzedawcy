import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";
import React, {useState} from "react";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import WidgetButton from "../../components/WidgetButton/WidgetButton";
import addIcon from "../../assets/icons/add.png";
import styles from './chartWidget.module.css'

export default function ChartWidget(props) {
    const measures = ['Turnover', 'Units sold']
    const [measure, setMeasure] = useState(measures[0]);
    const [isMeasureMenuOpen, setMeasureMenuOpen] = useState(false);

    const timePeriods = ['Today', 'This week', 'Past week']
    const [timePeriod, setTimePeriod] = useState(timePeriods[0]);
    const [isTimePeriodMenuOpen, setTimePeriodMenuOpen] = useState(false);

    const onSelectMeasure = (value) => {
        setMeasure(value);
        setMeasureMenuOpen(false);
    }

    const onSelectTimePeriod = (value) => {
        setTimePeriod(value);
        setTimePeriodMenuOpen(false);
    }

    const onMeasureMenuClick = () => {
        setMeasureMenuOpen((prev) => !prev);
    }

    const onTimePeriodMenuClick = () => {
        setTimePeriodMenuOpen((prev) => !prev);
    }

    const onMeasureMenuClickOutside = () => {
        setMeasureMenuOpen(false);
    }

    const onTimePeriodMenuClickOutside = () => {
        setTimePeriodMenuOpen(false);
    }

    const onClickAddPastPeriodData = () => {

    }

    const measureButtons = measures.filter(m => m !== measure).map((m) =>
        <DropdownButton
            key={m}
            name={m}
            onClick={onSelectMeasure}
        />
    );

    const timePeriodButtons = timePeriods.filter(t => t !== timePeriod).map((t) =>
        <DropdownButton
            key={t}
            name={t}
            onClick={onSelectTimePeriod}
        />
    );

    const widgetNav = <React.Fragment>
        <WidgetDropdownSelect
            content={measureButtons}
            selected={measure}
            isMenuOpen={isMeasureMenuOpen}
            onMenuClick={onMeasureMenuClick}
            onClickOutside={onMeasureMenuClickOutside}
            width={styles.width130}
            label={"Measure"}
        />
        <WidgetDropdownSelect
            content={timePeriodButtons}
            selected={timePeriod}
            isMenuOpen={isTimePeriodMenuOpen}
            onMenuClick={onTimePeriodMenuClick}
            onClickOutside={onTimePeriodMenuClickOutside}
            width={styles.width130}
            label={"Time period"}
        />
        <WidgetButton
            onCLick={onClickAddPastPeriodData}
            icon={addIcon}
            name={t("Add past period data")}
        />
    </React.Fragment>;

    return (
        <WidgetFrame WidgetName={t("salesChartMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            ranking
        </WidgetFrame>
    );
}