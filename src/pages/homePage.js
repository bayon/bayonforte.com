import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//# api:
import { requestApiDataThisSite } from "../actions";

import ThisSiteTable from "../components/thisSiteTable";

class HomePage extends React.Component {
    componentDidMount() {
        //# api:
        this.props.requestApiDataThisSite();
    }

    render() {
        if (this.props.data.success) {
            // console.log(this.props.data);
            return (
                <ThisSiteTable data={this.props.data.result}></ThisSiteTable>
            );
        } else {
            return <p>loading.............</p>;
        }
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiDataThisSite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

/*
import { requestApiDataThisSite } from "../actions";
 componentDidMount() {
        //# api:
        this.props.requestApiDataThisSite();
    }
in render->return->  data={this.props.data.result} 
const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiDataThisSite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
*/
