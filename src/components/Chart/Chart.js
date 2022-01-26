import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import React, { PureComponent } from 'react';
import styles from './chart.module.css'
import './chartStyle.scss'
import { actualChartData, chartDataHour } from '../../mocks/ChartMock'
import { t } from "i18next";

export default function Chart(props) {

    //Zmiana stylów grafu
    //Lepiej użyć StyledComponent, ale na tym poziomie projektu jest za dużo refaktoryzacji

    var style = getComputedStyle(document.body)
    console.log( style.getPropertyValue('--theme-primarychart-color') )
    //console.log(style)
    let classN = "Normal"

    let actualBar = <Bar dataKey="income" name={t("currentIncome")} fill="black" />;
    let pastBar = <Bar dataKey="income" name={t("pastIncome")} fill="black" />;
    let multpipleBar = <Bar dataKey="pastincome" name={t("pastIncome")} fill="black" />;
    let Yaxis = <YAxis label={{ value: t("chartIncome"), position: "insideTop", offset: -30 }} />

    if (props.isPastData && props.isAddedPastData) {
        multpipleBar = <Bar dataKey="pastincome" name={t("pastPastIncome")} fill="black" />;
        classN = "Older"
    }

    if (!props.measureType) {
        actualBar = <Bar dataKey="units" name={t("currentUnits")} fill="black" />;
        pastBar = <Bar dataKey="units" name={t("pastUnits")} fill="black" />;
        multpipleBar = <Bar dataKey="pastunits" name={t("pastUnits")} fill="black" />;
        Yaxis = <YAxis label={{ value: t("chartUnits"), position: "insideTop", offset: -30 }} />

        if (props.isPastData && props.isAddedPastData) {
            multpipleBar = <Bar dataKey="pastunits" name={t("pastPastUnits")} fill="black" />;
            classN = "Older"
        }

    }


    return (
        <div className={styles.chartDiv}>
            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%">
                    <BarChart
                        data={props.chartData}
                        margin={{
                            top: 40,
                            right: 50,
                            left: 15,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" stroke="grey" />
                        <XAxis dataKey={Object.keys(props.chartData[0])[0]}
                            label={{ value: t("chartSpan"), position: "insideBottomRight", offset: -25 }}
                            tickFormatter={formatXAxis}
                            tick={{ dy: 10 }}
                            style={styles.xaxis} />
                        {Yaxis}
                        <Tooltip />
                        <Legend wrapperStyle={{ bottom: 5 }} />
                        {!props.isPastData &&
                            actualBar
                        }
                        {props.isPastData &&
                            pastBar
                        }
                        {props.isAddedPastData &&
                            multpipleBar
                        }
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

function formatXAxis(tickItem) {
    var hasNumber = /\d/;
    if (hasNumber.test(tickItem)) {
        return tickItem
    }
    else {
        var name = t(tickItem)
        return (name)
    }
}

function formatYAxis(tickItem) {
    if (tickItem == 0) {

    }
}