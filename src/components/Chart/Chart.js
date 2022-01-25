import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import React, { PureComponent } from 'react';
import styles from './chart.module.css'
import { actualChartData, chartDataHour } from '../../mocks/ChartMock'
import { t } from "i18next";

export default function Chart(props) {

    let actualBar = <Bar dataKey="income" name={t("currentIncome")} fill="#5b00a6" />;
    let pastBar = <Bar dataKey="income" name={t("pastIncome")} fill="#de1f98" />;
    let multpipleBar = <Bar dataKey="pastIncome" name={t("pastIncome")} fill="#de1f98" />;
    let Yaxis = <YAxis label={{ value: t("chartIncome"), position: "insideTop", offset: -30 }} />

    if (props.measureType != "Turnover") {
        actualBar = <Bar dataKey="units" name={t("currentUnits")} fill="#5b00a6" />;
        pastBar = <Bar dataKey="units" name={t("pastUnits")} fill="#de1f98" />;
        multpipleBar = <Bar dataKey="pastUnits" name={t("pastUnits")} fill="#de1f98" />;
        Yaxis = <YAxis label={{ value: t("chartUnits"), position: "insideTop", offset: -30 }} />
    }

    return (
        <div className={styles.chartDiv}>
            <div className={styles.chartContainer}>

                <ResponsiveContainer width="100%" height="100%">
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
                            styel={styles.xaxis}/>
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