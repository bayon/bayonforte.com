import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiSkills } from "../actions";
import SkillsTable from "../components/skillsTable";

class SkillsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestApiSkills();
    }

    render() {
        if (this.props.data.success) {
            console.log(
                "SkillsPage.js :: render():: this.props.data.result:",
                this.props.data.result
            );
            return <SkillsTable data={this.props.data.result}></SkillsTable>;
        } else {
            return <p>loading..........</p>;
        }
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiSkills }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
