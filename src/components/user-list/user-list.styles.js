import styled from 'styled-components'

export const UserListContainer = styled.ScrollView`
display:flex;
width:100%;
height:100%;
`

export const UsernameContainer = styled.View`
display:flex;
flex-direction:row;
width:80%;
height:35px;
background-color:#f2f2f2;
margin-bottom: 5px;
border-radius:25px;
border: solid 2px #4DA3E5;
margin-left:10%;
align-items:center;
justify-content:center;
`

export const UsernameContainerText = styled.Text`
        color:#4DA3E5;
        font-size:20px;
        padding-left:15px;
`