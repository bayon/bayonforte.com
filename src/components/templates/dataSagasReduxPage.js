import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";
import SimpleTable from "./components/simpleTable";
import Typography from "@material-ui/core/Typography";

class DataSagasReduxPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        if (this.props.data.success) {
            return (
                <React.Fragment>
                    <Typography
                        component="div"
                        style={{
                            backgroundColor: "#cfe8fc",
                            height: "1vh"
                        }}
                    />
                    <SimpleTable data={this.props.data.result}></SimpleTable>
                </React.Fragment>
            );
        } else {
            return <p>loading.............</p>;
        }
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataSagasReduxPage);
