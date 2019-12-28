import React, { useState, Fragment } from 'react'
import { Text, TouchableOpacity, Modal } from 'react-native'

import { ModalContainer, ModalHeaderContainer, ModalHeaderText } from './custom-modal.styles'
import HeaderIcon from '../header-icon/header-icon.component'
import UserNameModal from '../username-modal/username-modal.component'
import UserList from '../user-list/user-list.component'

const CustomModal = ({ changeUserNameStart, isUserNameModal, isGifModal, isUserListModal, size, title, ...props }) => {

    const [modalDisplay, setModalDisplay] = useState(false)

    return (
        <Fragment>
            <Modal
                visible={modalDisplay}
                animationType='fade'
                transparent={true}
            >
                <ModalContainer
                    size={size}
                >
                    <ModalHeaderContainer>
                        <ModalHeaderText>
                            {title}
                        </ModalHeaderText>
                        
                        <TouchableOpacity onPress={() => setModalDisplay(false)}>
                            <HeaderIcon
                                name='ios-close'
                                type='ionicon'
                            />
                        </TouchableOpacity>
                    </ModalHeaderContainer>

                    {
                        isUserNameModal?
                        <UserNameModal />
                        :
                        null
                    }

                    {
                        isUserListModal?
                        <UserList />
                        :
                        null
                    }

                </ModalContainer>

            </Modal>

            <TouchableOpacity
                onPress={() => setModalDisplay(true)}
            >
                {props.children}
            </TouchableOpacity>
        </Fragment>
    )
}

export default CustomModal