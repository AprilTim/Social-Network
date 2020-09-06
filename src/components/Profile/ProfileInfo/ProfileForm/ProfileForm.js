import React from "react";
import "./ProfileForm.css";
import {Field, reduxForm} from "redux-form";
import ExitSvg from "../../../Common/Exit";
import {required} from "../../../Common/Validations";
import Input from "../../../Common/FormControl/FormControls";





const ProfileForm = (props) => {

    let findErrorElement = (arr,el) => {
        for (let i = 0; i < arr.length; i++) {
            let newCheck = arr[i].split(">")[1].split(")").slice(0, 1).join()
            if (el.toLowerCase() == newCheck.toLowerCase()){
                return arr[i]
            }
        }
    }

    let contactsItem = Object.keys(props.profile.contacts).map(el => {
         return <div className="profileForm_contacts_item"><div>{el[0].toUpperCase() + el.slice(1)}: </div><Field key={el}
                          /*validate={[required]}*/
                          name={`contacts.${el}`}
                          placeholder={`${el[0].toUpperCase() + el.slice(1)}...`}
                          className={`profileForm_item ${props.error && findErrorElement(props.error,el) && "input_custom_warn"}`}
                          component={Input}
         error={props.error && findErrorElement(props.error,el)}/></div>})

    return (
        <div className="profileForm-bg" onSubmit={props.handleSubmit}>
            <form className="profileForm">
                <h3 className="profileForm_title">Profile</h3>
                <a onClick={() => props.setEditProfile(false)} className="btn _small"><ExitSvg/></a>
                <Field validate={[required]} name="fullName" placeholder="Full name..." className="profileForm_item"
                       component={Input}/>
                <Field validate={[required]} name="aboutMe" placeholder="About me..." className="profileForm_item"
                       component="textarea"/>
                <div className="profileForm_contacts">
                    {contactsItem}
                    {/*<div className={`profile_summaryError ${props.error && 'showError'}`}>{props.error && props.error.map(el => <p>{el}</p>)}</div>*/}
                </div>
                <label for="lookingForAJob" className="profileForm_item checkbox">
                    <span className="checkbox_text">В поисках работы</span>
                    <Field id="lookingForAJob" name="lookingForAJob" placeholder="В поисках работы..." className="profileForm_checkbox"
                           component="input" type="checkbox"/>
                </label>
                <Field validate={[required]} name="lookingForAJobDescription" placeholder="Какую работу ищешь..."
                       className="profileForm_item" component={Input}/>
                <button type="submit" className="btn">Ready</button>
            </form>
        </div>
    )
}

const ProfileFormRedux = reduxForm({form: "profile"})(ProfileForm)

export default ProfileFormRedux;