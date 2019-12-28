import React from 'react'

import { Keyboard, TouchableWithoutFeedback, } from 'react-native'
import { IntroContainer, LogoContainer, IntroText } from './intro.styles'

import UserNameModal from '../username-modal/username-modal.component'

const Intro = () => {



    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
            <IntroContainer behavior="padding" enabled >
                {/* KeyboardAvoidingView was used  */}

                <LogoContainer
                    source={require('../../../assets/chatImg.jpg')}
                />
             
                <IntroText>
                    Please set your username to start
            </IntroText>

            <UserNameModal />


            </IntroContainer>
        </TouchableWithoutFeedback>
    )
}



export default Intro