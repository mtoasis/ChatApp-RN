import React, { Fragment } from 'react'
import { HeaderContainer } from './header.styles'
import { Modal } from 'react-native'
// import Modal from '../modal/modal.component'
import HeaderIcon from '../header-icon/header-icon.component'
import CustomModal from '../modal/custom-modal.component'

const Header = ({ isLoading }) => (

    <HeaderContainer>
        {isLoading ?
        <Fragment>
            <CustomModal
                title='Change Username'
            >
                <HeaderIcon
                    name='ios-settings'
                    type='ionicon'
                    spread
                    color='white'
                />
            </CustomModal>

            <CustomModal
                title='Fun Gifs!'
                size='large'
            >
                <HeaderIcon
                    name='gif'
                    type='material-icons'
                    spread
                    color='white'
                />
            </CustomModal>

            <CustomModal
                title='Active Users'
                size='large'
            >
                <HeaderIcon
                    name='ios-people'
                    type='ionicon'
                    spread
                    color='white'
                />
            </CustomModal>
            </Fragment>
    :
            null
        }
    </HeaderContainer>

)

export default Header