import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiExperience } from "../actions";
import ExperienceTable from "../components/experienceTable";

class QualificationsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestApiExperience();
    }

    render() {
        if (this.props.data.success) {
            console.log(
                "QualificationsPage.js :: render():: this.props.data.result:",
                this.props.data.result
            );
            return (
                <ExperienceTable
                    data={this.props.data.result}
                ></ExperienceTable>
            );
        } else {
            return <p>loading.............</p>;
        }
    }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiExperience }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QualificationsPage);
