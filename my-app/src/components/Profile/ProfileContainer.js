import React from 'react';
import './Profile.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile, showContacts} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 10907;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isContacts={this.props.isContacts}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isContacts: state.profilePage.isContacts
})

let WithURLDataRouterComp = withRouter(ProfileContainerAPI);

export default connect(mapStateToProps, {setUserProfile,showContacts})(WithURLDataRouterComp);