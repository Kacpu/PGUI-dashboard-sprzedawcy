import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import React, { PureComponent } from 'react';
import styles from './chart.module.css'
import { actualChartData, chartDataHour } from '../../mocks/ChartMock'
import {t} from "i18next";

export default function Chart(props) {
        return (
            <div className={styles.chartDiv}>
                <div className={styles.chartContainer}>

                <ResponsiveContainer width="100%" height="100%">
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
                            label={{value: t("chartSpan"), position:"insideBottomRight", offset:-25}} 
                            tickFormatter={formatXAxis} 
                            tick={{dy:10}}/>
                            <YAxis label={{value:t("chartIncome"), position: "insideTop", offset:-30}}/>
                            <Tooltip />
                            <Legend wrapperStyle={{bottom:5}}/>
                            {props.isPastData && 
                                <Line type="linear" dataKey="pastIncome" name={t("pastIncome")} stroke="#de1f98" strokeWidth="2" activeDot={{ r: 8 }} />
                            }
                            <Line type="linear" dataKey="income" name={t("currentIncome")} stroke="#5b00a6" strokeWidth="2" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }

function formatXAxis(tickItem){
    var hasNumber = /\d/;
    if(hasNumber.test(tickItem)){
        return tickItem
    }
    else{
        var name = t(tickItem)
        return(name)
    }
}

function formatYAxis(tickItem){
    if(tickItem == 0){

    }
}