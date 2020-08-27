import React from 'react';
import './Profile.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunk, getUserStatus, showContacts, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 10907;
        }
        this.props.getProfileThunk(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isContacts={this.props.isContacts}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isContacts: state.profilePage.isContacts,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {showContacts, getProfileThunk, getUserStatus, updateStatus}),
    withRouter,
)(ProfileContainerAPI)
