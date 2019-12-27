import React from 'react'
import { Text, Image } from 'react-native'
import { IntroContainer, LogoContainer, IntroText } from './intro.styles'
import Logo from '../../../assets/chat.png'

// import UserNameModal from '../username-modal/username-modal.component'


const Intro = () => {

    return (
        <IntroContainer>

            <LogoContainer 
            source={require('../../../assets/chatImg.jpg')}
            />
            {/* <UserNameModal /> */}
            <IntroText>
                Please set your username to start
            </IntroText>
        </IntroContainer>
    )
}

export default Intro