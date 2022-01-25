import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import { t } from "i18next";
import React, { useState } from "react";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import WidgetButton from "../../components/WidgetButton/WidgetButton";
import addIcon from "../../assets/icons/add.png";
import styles from './chartWidget.module.css'
import Chart from "../../components/Chart/Chart"
import { chartDataHour, actualChartData, pastChartData } from "../../mocks/ChartMock"
import { actualChartDataUnit, chartDataHourUnit, pastChartDataUnit} from "../../mocks/ChartUnitsMock"

export default function ChartWidget(props) {
    const measures = ['Turnover', 'Units sold']
    const [measure, setMeasure] = useState(measures[0]);
    const [isMeasureMenuOpen, setMeasureMenuOpen] = useState(false);

    const timePeriods = ['Today', 'This week', 'Past week']
    const [timePeriod, setTimePeriod] = useState(timePeriods[0]);
    const [isTimePeriodMenuOpen, setTimePeriodMenuOpen] = useState(false);

    const [addPastData, setAddPastData] = useState(false);

    const onSelectMeasure = (value) => {
        setMeasure(value);
        setMeasureMenuOpen(false);
    }

    const onSelectTimePeriod = (value) => {
        setTimePeriod(value);
        if (timePeriod == "Today") {
            setAddPastData(false);
        }
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
        setAddPastData(!addPastData);
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
            onClick={onClickAddPastPeriodData}
            icon={addIcon}
            name={t("Add past period data")}
        />
    </React.Fragment>;

    function isPastData() {
        if(timePeriod=="Past week"){
            return true
        }
    }

    function shouldPastBeAdded() {
        if(addPastData){
            if(timePeriod == "This week"){
                return true
            }
        }
        return false
    }

    function loadData() {
        if(measure == "Units sold"){
            var rt = loadUnitsDataMock()
        }
        else{
            var rt = loadIncomeDataMock()
        }
        return rt
    }


    function loadUnitsDataMock(){
        if (timePeriod === "Today") {
            if (addPastData == false || addPastData == true) {
                return chartDataHourUnit;
            }
        } else if (timePeriod === "This week") {
            if (addPastData == false) {
                return actualChartDataUnit;
            }
            else {
                var newArray = [];
                for (var i = 0; i < actualChartDataUnit.length; i++) {
                    var newData = {};
                    newData.day = actualChartDataUnit[i].day
                    newData.units = actualChartDataUnit[i].units
                    newData.pastUnits= pastChartDataUnit[i].units
                    newArray.push(newData)
                }
                return newArray;
            }
        } else if (timePeriod === "Past week") {
            if (addPastData == false || addPastData == true) {
                return pastChartDataUnit;
            }
        }

    }


    function loadIncomeDataMock() {
        if (timePeriod === "Today") {
            if (addPastData == false || addPastData == true) {
                return chartDataHour;
            }
        } else if (timePeriod === "This week") {
            if (addPastData == false) {
                return actualChartData;
            }
            else {
                var newArray = [];
                for (var i = 0; i < actualChartData.length; i++) {
                    var newData = {};
                    newData.day = actualChartData[i].day
                    newData.income = actualChartData[i].income
                    newData.pastIncome = pastChartData[i].income
                    newArray.push(newData)
                }
                return newArray;
            }
        } else if (timePeriod === "Past week") {
            if (addPastData == false || addPastData == true) {
                return pastChartData;
            }
        }
    }

    return (
        <WidgetFrame WidgetName={t("salesChartMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            <Chart
                chartData={loadData()}
                isPastData={isPastData()}
                isAddedPastData={shouldPastBeAdded()}
                measureType={measure}
            >
            </Chart>
        </WidgetFrame>
    );
}

