import React from "react";
import "./FormControls.css"

const Input = ({input,meta,...props}) => {

// И - возвращает первый false, либо если все выражения true, то псоледний true
//Или - возвращает первый true,  либо если все выражения false, то последний false


    return(
        <div className="input_custom">
            <input className={`input _loginInput ${meta.visited && meta.invalid ? "input_custom_warn":""}`} {...input} {...props}/>
            {/*{meta.visited && meta.error &&  <div className="input_custom_error">{meta.error}</div>}*/}
            <div className={`input_custom_error ${meta.visited && (props.error || meta.error) ? "showError":""}`}>{meta.error || props.error}</div>
        </div>
    )
}

export default Input
