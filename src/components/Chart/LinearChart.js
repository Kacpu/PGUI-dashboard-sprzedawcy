import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import React, { PureComponent } from 'react';
import styles from './chart.module.css'
import { actualChartData, chartDataHour } from '../../mocks/ChartMock'
import { t } from "i18next";

export default function LinearChart(props) {

    let actualLine = <Line type="linear" dataKey="income" name={t("currentIncome")} stroke="black" strokeWidth='2' />;
    let pastLine = <Line type="linear" dataKey="income" name={t("pastIncome")} stroke="black" strokeWidth='2' />;
    let multpipleLine = <Line type="linear" dataKey="pastincome" name={t("pastIncome")} stroke="black" strokeWidth='2' />;
    let Yaxis = <YAxis label={{ value: t("chartIncome"), position: "insideTop", offset: -30 }} />

    if (props.isPastData && props.isAddedPastData) {
        multpipleLine = <Line type="linear" dataKey="pastincome" name={t("pastPastIncome")} stroke="black" strokeWidth='2' />;
    }

    if (!props.measureType) {
        actualLine = <Line type="linear" dataKey="units" name={t("currentUnits")} stroke="black" strokeWidth='2' />;
        pastLine = <Line type="linear" dataKey="units" name={t("pastUnits")} stroke="black" strokeWidth='2' />;
        multpipleLine = <Line type="linear" dataKey="pastunits" name={t("pastUnits")} stroke="black" strokeWidth='2' />;
        Yaxis = <YAxis label={{ value: t("chartUnits"), position: "insideTop", offset: -30 }} />


        if (props.isPastData && props.isAddedPastData) {
            multpipleLine = <Line type="linear" dataKey="pastunits" name={t("pastPastUnits")} stroke="black" strokeWidth='2' />;
        }
    }



    return (
        <div className={styles.chartDiv}>
            <div className={styles.chartContainer}>

                <ResponsiveContainer width="99%">
                    <LineChart
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
                            styel={styles.xaxis} />
                        {Yaxis}
                        <Tooltip />
                        <Legend wrapperStyle={{ bottom: 5 }} />
                        {!props.isPastData &&
                            actualLine
                        }
                        {props.isPastData &&
                            pastLine
                        }
                        {props.isAddedPastData &&
                            multpipleLine
                        }
                    </LineChart>
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