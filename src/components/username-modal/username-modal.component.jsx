import React, { useState} from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentuser, selectUserId} from '../../redux/user/user.selectors'
import { changeUserNameStart } from '../../redux/user/user.actions'
import {UsernameModalConatiner} from './username-modal.styles'
import CustomButton from '../custom-button/custom-button.component'

const UserNameModal = ({userId, currentUsername, setModalDisplay, changeUserNameStart }) => {

    // const [userName, setUserName] = useState("")

    // const handleChange = (event) => {
    //     const { value } = event.target;
    //     setUserName(value)
    // }

    // const handleSubmit = event => {
        
    //     event.preventDefault();

    //     let userInfo = {
    //         oldUserName: `${currentUsername? currentUsername: "newUser"}`,
    //         newUserName: userName,
    //         userId,
    //     }

    //     changeUserNameStart(userInfo)
    //     setUserName("")
    //     if (setModalDisplay) {
    //         setModalDisplay(false)
    //     }
    // }

    return (
        <UsernameModalConatiner>
        </UsernameModalConatiner>
    )
}

const mapDispatchToProps = dispatch => ({
    changeUserNameStart: (userInfo) => dispatch(changeUserNameStart(userInfo)),
})

const mapStateToProps = createStructuredSelector({
    currentUsername: selectCurrentuser,
    userId: selectUserId
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNameModal)