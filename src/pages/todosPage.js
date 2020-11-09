import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";
import TodosTable from "../components/todosTable";

class TodosPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        if (this.props.data.success) {
            return <TodosTable data={this.props.data.result}></TodosTable>;
        } else {
            return <p>loading.............</p>;
        }
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
