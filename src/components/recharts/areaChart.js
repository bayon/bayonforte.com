import React, { Component } from "react";
//import { changeNumberOfData } from './utils';
import axios from "axios";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    LabelList,
    Label
} from "recharts";


const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290, time: 9 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
    { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
    { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
    { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 }
];
/*
const data01 = [
    { day: "05-01", weather: "sunny" },
    { day: "05-02", weather: "sunny" },
    { day: "05-03", weather: "cloudy" },
    { day: "05-04", weather: "rain" },
    { day: "05-05", weather: "rain" },
    { day: "05-06", weather: "cloudy" },
    { day: "05-07", weather: "cloudy" },
    { day: "05-08", weather: "sunny" },
    { day: "05-09", weather: "sunny" }
];
const data02 = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 }
];
*/
const initialState = { data }; // data01, data02
const renderCustomizedActiveDot = (props) => {
    const { cx, cy, stroke, index, dataKey } = props;

    return (
        <path
            d={`M${cx - 2},${cy - 2}h4v4h-4Z`}
            fill={stroke}
            key={`dot-${dataKey}`}
        />
    );
};

const renderLabel = (props) => {
    const { index, x, y } = props;

    return (
        <text x={x} y={y} className="customized-label">
            {index}
        </text>
    );
};

export default class AreaChartOne extends Component {
    static displayName = "AreaChartOne";

    state = initialState;
    /*
  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };
  */

    componentDidMount() {
        //try  api call via axios here.
        console.log("componentn Did mount call to open weather api.");
        let options = new Promise(function (resolve, reject) {
            const url = `http://api.openweathermap.org/data/2.5/forecast?zip=47115&appid=0f8a8df4efb46ad96d0c64cb4923e9b4`;
            //let SAVED_DESIGNS_ARRAY = util.store("get", K.SAVED_DESIGNS_ARRAY);

            axios
                .get(url)
                .then((response) => response.data)
                .then((data) => {
                    resolve(data);
                });
        });
        var that = this;
        options.then(function (value) {
            console.log("value in promise response:", value);
            that.setState({
                weather_data: value
            });
        });
    }

    render() {
        const { data } = this.state; //, data01, data02

        return (
            <div className="area-charts">
                <p>Stacked AreaChartOne</p>
                <div className="area-chart-wrapper">
                    <AreaChartOne
                        width={800}
                        height={400}
                        data={this.state.data}
                        margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
                        syncId="test"
                    >
                        <XAxis dataKey="time" type="number">
                            <Label position="insideTopRight" offset={-30}>
                                province
                            </Label>
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                        <Area
                            stackId="0"
                            type="monotone"
                            dataKey="uv"
                            stroke="#ff7300"
                            fill="#ff7300"
                            dot
                            activeDot={renderCustomizedActiveDot}
                            hide
                        >
                            <LabelList position="top" />
                        </Area>
                        <Area
                            stackId="0"
                            type="monotone"
                            dataKey="amt"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            dot
                            activeDot={renderCustomizedActiveDot}
                            label={renderLabel}
                        />
                        <Area
                            stackId="0"
                            type="monotone"
                            dataKey="pv"
                            stroke="#387908"
                            fill="#387908"
                            animationBegin={1300}
                            dot
                            activeDot={renderCustomizedActiveDot}
                        >
                            <LabelList position="top" />
                        </Area>
                        <Legend
                            layout="vertical"
                            align="left"
                            verticalAlign="middle"
                        />
                    </AreaChartOne>
                    {this.state.weatherData != "undefined" &&
                        console.log(
                            "data ready to use....for open weather...."
                        )}

                </div>

            </div>
        );
    }
}

/*
HERE is 5 day forecast by zip code.
http://api.openweathermap.org/data/2.5/forecast?zip=47115&appid=0f8a8df4efb46ad96d0c64cb4923e9b4







////////
https://openweathermap.org/forecast16#name16

https://samples.openweathermap.org/data/2.5/forecast/daily?zip=94040&appid=b6907d289e10d714a6e88b30761fae22

- Your API key is 0f8a8df4efb46ad96d0c64cb4923e9b4

api.openweathermap.org

The example they gave in the email:
http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0f8a8df4efb46ad96d0c64cb4923e9b4

ttp://openweathermap.org/faq#error401

http://api.openweathermap.org/data/2.5/weather?q=Louisville,us&appid=0f8a8df4efb46ad96d0c64cb4923e9b4

5 day forecast
http://api.openweathermap.org/data/2.5/forecast?zip=47115&appid=0f8a8df4efb46ad96d0c64cb4923e9b4
*/
