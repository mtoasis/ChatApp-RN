import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ChatInputBoxContainer, SendButtonContainer } from './chat-inputbox.styles'

import FormInput from '../form-input/form-input.component'

import { selectUserId, selectCurrentuser } from '../../redux/user/user.selectors'
import { sendNewMessageStart } from '../../redux/chat/chat.actions'

const ChatInputBox = ({ currentUser, userId, sendNewMessageStart }) => {

    const [newMsg, setNewMsg] = useState("")

    const handleChange = (value) => {
        setNewMsg(value)
    }

    const handleSubmit = () => {
        sendNewMessageStart({ currentUser, userId, newMsg })
        setNewMsg("")
    }

    return (
        <ChatInputBoxContainer>
            <FormInput 
            value={newMsg}
            handleChange={handleChange}
            placeholder="Type your message"
            onSubmit={handleSubmit}
            large
            />
            <SendButtonContainer onPress={handleSubmit}>
                <Icon
                    name='ios-send'
                    type='ionicon'
                    size={30}
                    color='white'
                />
            </SendButtonContainer>
        </ChatInputBoxContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
    userId: selectUserId
})

const mapDispatchToProps = dispatch => ({
    sendNewMessageStart: (msgInfo) => dispatch(sendNewMessageStart(msgInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputBox)