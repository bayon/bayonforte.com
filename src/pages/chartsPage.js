import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiChart } from "../actions";
import AreaChartOne from "../components/recharts/areaChart";
import Button from '../components/button/button';

class ChartsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestApiChart();
    }

    render() {
        if (this.props.data.success) {
            console.log(
                "ChartsPage this.props.data.result:",
                this.props.data.result
            );
            {/**<AreaChartOne></AreaChartOne> */ }
            return <div>review data in console. <Button label="click me"></Button></div>;
        } else {
            return <div><p>loading..........</p></div>;
        }

    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiChart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartsPage);
/*
start here:
 - chartsPage.js
 - actions/
    - ok
- sagas
    - ok
- reducers
    - ok
- api_calls/
    - chart.js ok  SWAP OUT : API URL : ${process.env.REACT_APP_API_URL}/get-chart
    - // http://api.openweathermap.org/data/2.5/forecast?zip=47115&appid=0f8a8df4efb46ad96d0c64cb4923e9b4
 return <AreaChartOne data={this.props.data.result}></AreaChartOne>;

*/
