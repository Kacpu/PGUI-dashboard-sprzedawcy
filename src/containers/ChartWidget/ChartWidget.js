import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import { t } from "i18next";
import React, { useState } from "react";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import WidgetButton from "../../components/WidgetButton/WidgetButton";
import addIcon from "../../assets/icons/add.png";
import subIcon from "../../assets/icons/substract.png"
import styles from './chartWidget.module.css'
import Chart from "../../components/Chart/Chart"
import LinearChart from "../../components/Chart/LinearChart";
import { chartDataHour, actualChartData, pastChartData, pastPastChartData, pastChartDataHour } from "../../mocks/ChartMock"
import { actualChartDataUnit, chartDataHourUnit, pastChartDataUnit, pastChartDataHourUnit, pastPastChartDataUnit } from "../../mocks/ChartUnitsMock"

export default function ChartWidget(props) {
    const measures = ['Turnover', 'UnitsSold']
    const [measure, setMeasure] = useState(measures[0]);
    const [isMeasureMenuOpen, setMeasureMenuOpen] = useState(false);

    const timePeriods = ['Today', 'This week', 'Past week']
    const [timePeriod, setTimePeriod] = useState(timePeriods[0]);
    const [isTimePeriodMenuOpen, setTimePeriodMenuOpen] = useState(false);

    const chartTypes = ['Linear', 'Bar']
    const [chartType, setChartType] = useState(chartTypes[0]);
    const [isChartTypeMenuOpen, setChartTypeMenuOpen] = useState(false);

    const [addPastData, setAddPastData] = useState(false);

    const iconTypes = [addIcon, subIcon]
    const [iconType, setIconType] = useState(iconTypes[0]);

    const onSelectMeasure = (value) => {
        setMeasure(value);
        setMeasureMenuOpen(false);
    }

    const onSelectTimePeriod = (value) => {
        setTimePeriod(value);
        setTimePeriodMenuOpen(false);
    }

    const onSelectChartType = (value) => {
        setChartType(value);
        setChartTypeMenuOpen(false);
    }

    const onMeasureMenuClick = () => {
        setMeasureMenuOpen((prev) => !prev);
    }

    const onTimePeriodMenuClick = () => {
        setTimePeriodMenuOpen((prev) => !prev);
    }

    const onChartTypeMenuClick = () => {
        setChartTypeMenuOpen((prev) => !prev);
    }

    const onMeasureMenuClickOutside = () => {
        setMeasureMenuOpen(false);
    }

    const onTimePeriodMenuClickOutside = () => {
        setTimePeriodMenuOpen(false);
    }

    const onChartTypeMenuClickOutside = () => {
        setChartTypeMenuOpen(false);
    }

    const onClickAddPastPeriodData = () => {
        if(iconType === addIcon){
            setIconType(subIcon);
        }
        else{
            setIconType(addIcon);
        }
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

    const chartTypeButtons = chartTypes.filter(t => t !== chartType).map((t) =>
        <DropdownButton
            key={t}
            name={t}
            onClick={onSelectChartType}
        />
    );

    const widgetNav = <React.Fragment>
        <WidgetDropdownSelect
            content={measureButtons}
            selected={measure}
            isMenuOpen={isMeasureMenuOpen}
            onMenuClick={onMeasureMenuClick}
            onClickOutside={onMeasureMenuClickOutside}
            width={styles.width125}
            label={t("Measure")}
        />
        <WidgetDropdownSelect
            content={timePeriodButtons}
            selected={timePeriod}
            isMenuOpen={isTimePeriodMenuOpen}
            onMenuClick={onTimePeriodMenuClick}
            onClickOutside={onTimePeriodMenuClickOutside}
            width={styles.width150}
            label={t("TimePeriod")}
        />
        <WidgetDropdownSelect
            content={chartTypeButtons}
            selected={chartType}
            isMenuOpen={isChartTypeMenuOpen}
            onMenuClick={onChartTypeMenuClick}
            onClickOutside={onChartTypeMenuClickOutside}
            width={styles.width125}
            label={t("ChartType")}
        />
        <WidgetButton
            onClick={onClickAddPastPeriodData}
            icon={iconType}
            name={t("PastData")}
        />
    </React.Fragment>;

    function isPastData() {
        if (timePeriod === "Past week") {
            return true
        }
    }

    function shouldPastBeAdded() {
        if (addPastData) {
            return true
        }
        return false
    }

    function loadData() {
        if (measure === "UnitsSold") {
            var rt = loadUnitsDataMock()
        }
        else {
            var rt = loadIncomeDataMock()
        }
        return rt
    }



    function loadUnitsDataMock() {
        if (timePeriod === "Today") {
            if (addPastData === false) {
                return chartDataHourUnit;
            }
            else {
                var newArray = mergeDataChartMock(chartDataHourUnit, pastChartDataHourUnit)
                return newArray;
            }
        } else if (timePeriod === "This week") {
            if (addPastData === false) {
                return actualChartDataUnit;
            }
            else {
                var newArray = mergeDataChartMock(actualChartDataUnit, pastChartDataUnit)
                return newArray;
            }
        } else if (timePeriod === "Past week") {
            if (addPastData === false) {
                return pastChartDataUnit;
            } else {
                var newArray = mergeDataChartMock(pastChartDataUnit, pastPastChartDataUnit)
                return newArray;
            }
        }

    }

    function mergeDataChartMock(first, second) {
        var newArray = [];
        var firstKey = [Object.keys(first[0])[0]];
        var secondKey = [Object.keys(first[0])[1]];
        var thirdKey = "past" + secondKey

        for (var i = 0; i < first.length; i++) {

            var newData = {};
            newData[firstKey] = first[i][firstKey]
            newData[secondKey] = first[i][secondKey]
            newData[thirdKey] = second[i][secondKey]
            newArray.push(newData)
        }
        return newArray;
    }

    function loadIncomeDataMock() {
        if (timePeriod === "Today") {
            if (addPastData === false) {
                return chartDataHour;
            }
            else {
                var newArray = mergeDataChartMock(chartDataHour, pastChartDataHour)
                return newArray
            }
        } else if (timePeriod === "This week") {
            if (addPastData === false) {
                return actualChartData;
            }
            else {
                var newArray = mergeDataChartMock(actualChartData, pastChartData)
                return newArray;
            }
        } else if (timePeriod === "Past week") {
            if (addPastData === false) {
                return pastChartData;
            }
            else {
                var newArray = mergeDataChartMock(pastChartData, pastPastChartData)
                return newArray;
            }
        }
    }

    function checkChartType() {
        console.log(chartType)
        if (chartType === "Linear") {
            return true;
        }
        else {
            return false;
        }
    }

    function checkMeasureType(){
        if(measure === "Turnover"){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <div className={styles.WidgetDiv}>
        <WidgetFrame WidgetName={t("salesChartMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            {checkChartType() ? (
                <LinearChart
                    chartData={loadData()}
                    isPastData={isPastData()}
                    isAddedPastData={shouldPastBeAdded()}
                    measureType={checkMeasureType()}
                >
                </LinearChart>
            ) : (
                <Chart
                chartData={loadData()}
                isPastData={isPastData()}
                isAddedPastData={shouldPastBeAdded()}
                measureType={checkMeasureType()}
            >
            </Chart>
            )}
        </WidgetFrame>
        </div>
    );
}

