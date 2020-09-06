import React, {useEffect, useState} from "react";

const ProfileStatusHook = (props) => {

        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)

        const  activateEditMode = () => {
            setEditMode(true)
        }

        const  deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value)
        }

        useEffect(() => setStatus(props.status),[props.status])

        return (
            <div className='profile_status'>
                {!editMode && <div onClick={activateEditMode}>{status ? status:'Тут мог быть статус!'}</div>}
                {editMode && <div><input className="input"
                                         onChange={onStatusChange}
                                         autoFocus={true}
                                         onBlur={deactivateEditMode}
                                         value={status}/></div>}
            </div>
        )
    }


export default ProfileStatusHook;