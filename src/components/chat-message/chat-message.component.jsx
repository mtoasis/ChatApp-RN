import React from 'react'
import {
    UserNameContainer,
    ChatMessageContainer,
    MessageContainer,
    SystemMessageContainer,
    InnerMessageContainer,
    MessageTextContainer,
    ImageContainer,
    UserNameTextContainer
} from './chat-message.styles'


import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserId } from '../../redux/user/user.selectors'



const ChatMessage = ({ allchats: { from, msg, url, userId }, ownUserId }) => (
    <ChatMessageContainer
        from={from}
        userId={userId}
        ownUserId={ownUserId}
    >
        {from === "Main Server" ?
            <SystemMessageContainer>{msg}</SystemMessageContainer>
            :
            <InnerMessageContainer>
                <UserNameContainer
                    userId={userId}
                    ownUserId={ownUserId}
                >
                    <UserNameTextContainer>
                        {from.slice(0, 10)} {from.length > 10 ? `..` : null}
                    </UserNameTextContainer>
                </UserNameContainer>

                <MessageContainer
                    userId={userId}
                    ownUserId={ownUserId}
                >
                    {url ?
                        <ImageContainer source={{uri:url}} />                        
                        :
                        <MessageTextContainer>{msg}</MessageTextContainer>
                    }
                </MessageContainer>
            </InnerMessageContainer>
        }

    </ChatMessageContainer>
)


const mapStateToProps = createStructuredSelector({
    ownUserId: selectUserId
})

export default connect(mapStateToProps)(ChatMessage);
