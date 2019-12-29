import React, { Fragment, useState } from 'react'
import {Text} from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {SubmitButtonContainer, ButtonText} from './username-modal.styles'

import FormInput from '../form-input/form-input.component'


import { changeUserNameStart } from '../../redux/user/user.actions'
import { selectCurrentuser, selectUserId } from '../../redux/user/user.selectors'



const UserNameModal = ({ changeUserNameStart, currentUsername, userId, setModalDisplay }) => {

    const [userName, setUserName] = useState("")

    const handleChange = (value) => {
        setUserName(value)
    }

    const handleSubmit = () => {

        let userInfo = {
            oldUserName: `${currentUsername ? currentUsername : "newUser"}`,
            newUserName: userName,
            userId,
        }
        console.log(`running handle submit`)
        console.log(userInfo)

        changeUserNameStart(userInfo)
        setUserName("")

        if(currentUsername){
            setModalDisplay(false)
        }
    }

    return (
        <Fragment>
            <FormInput
                value={userName}
                handleChange={handleChange}
                placeholder="Username"
                onSubmit={() => handleSubmit()}
            />


            <SubmitButtonContainer
                onPress={() => handleSubmit()}
            >
                <ButtonText>Submit!</ButtonText>
            </SubmitButtonContainer>

            <Text>CurrentUserName: {currentUsername}</Text>
            <Text>CurrentUserId: {userId}</Text>

        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    changeUserNameStart: (userInfo) => dispatch(changeUserNameStart(userInfo))
})

const mapStateToProps = createStructuredSelector({
    currentUsername: selectCurrentuser,
    userId: selectUserId,
})


export default connect(mapStateToProps, mapDispatchToProps)(UserNameModal)