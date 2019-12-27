import styled from 'styled-components'

const userMessageColor = "#ffffe6"

const otherMessageColor = "#AEDAFE"

export const ChatMessageContainer = styled.View`
display:flex;
padding: 5px 0;
padding-left:20px;
justify-content:${({ from }) => from === "Main Server" ? "center" : 'flex-start'};
flex-direction: ${({ userId, ownUserId }) => userId === ownUserId ? "row-reverse" : "row"};
`

export const InnerMessageContainer = styled.View`
display:flex;
`

export const UserNameContainer = styled.View`
display:flex;
flex-direction: ${({ userId, ownUserId }) => userId === ownUserId ? "row-reverse" : "row"};
padding:0 10px;
`

export const UserNameTextContainer = styled.Text`
    font-size:10px;
`

export const MessageContainer = styled.View`
display:flex;
flex-direction:row;
min-width:150px;
min-height:30px;
background-Color:${({ userId, ownUserId }) => userId === ownUserId ? userMessageColor : otherMessageColor};
padding: 0 3px;
border: 0;
border-radius:10px;
`
export const MessageTextContainer = styled.Text`
        font-size:13px;
        padding:5px;
`

export const SystemMessageContainer = styled.Text`
    color:grey;
    font-size:9px;
    justify-content: center;
`

export const ImageContainer = styled.Image`
        width:100px;
        height:100px;
`


