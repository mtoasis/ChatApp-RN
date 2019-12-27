import React from 'react'
import axios from 'axios'
import { View, Text, YellowBox } from 'react-native'

import { socket } from '../../socket-io/socket-io.utils'
import { MessageWindowContainer } from './message-window.styles'
import ChatMessage from '../chat-message/chat-message.component'

YellowBox.ignoreWarnings(['Warning: ...']);

class MessageWindow extends React.Component {

    constructor() {
        super()
        this.state = {
            chatHistory: [],
        }
        //creating Ref point for the autoScroll to bottom
    }


    componentDidMount() {
        this.initializing()
    }

    initializing = async () => {
        const { data } = await axios.get('http://chatapp-mrj.herokuapp.com/init')
        this.setState({ chatHistory: data, test: data })
        this.receiveMessage()
    }

    receiveMessage = () => {
        const self = this;
        socket.on('chat message', function (msg) {
            self.setState({ chatHistory: [...self.state.chatHistory, { allchats: { ...msg } }] })
        })
    }

    render() {
        const { chatHistory } = this.state;
        return (
            <MessageWindowContainer
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    this.scrollView.scrollToEnd({ animated: true });
                }}
            >
                {
                    chatHistory.map((element,i) =>
                        <ChatMessage key={i} allchats={element.allchats}/>
                        // <Text>{element.allchats.msg}</Text>
                    )
                }
            </MessageWindowContainer>)
    }
}

export default MessageWindow