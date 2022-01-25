import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import styles from './chart.module.css'
import {chartdata, chartDataHour} from '../../mocks/ChartMock'

export default class Chart extends PureComponent {
    render() {
        return (
            <div className={styles.chartDiv}>
                <div className={styles.chartContainer}>

                     <ResponsiveContainer width="100%" height="100%"> 
                        <LineChart
                              //width={500}
                              //height={300}
                            data={chartDataHour}
                            margin={{
                                top: 10,
                                right: 40,
                                left: -10,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="5 5"/>
                            <XAxis dataKey="hour" name="test" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="income" name="Current Income" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="incom" name="Past Income" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}