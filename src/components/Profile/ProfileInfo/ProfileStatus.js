import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    setEditMode = () => {
        this.setState({
            editMode:true
        })
    }

    deleteEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.state.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className=''>{!this.state.editMode ?
                <div onClick={this.setEditMode}>{this.props.status !=''? this.props.status:'Тут мог быть статус!'}</div>
                :<div><input className="input" onChange={this.onStatusChange} autoFocus={true} onBlur={this.deleteEditMode} value={this.state.status}/></div>}
            </div>
        )
    }
}

export default ProfileStatus;