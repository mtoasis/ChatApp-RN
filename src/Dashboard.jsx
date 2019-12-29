import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { DashboardContainer } from './Dashboard.styles'

import SocketHidden from './components/socket-hidden/socket-hidden.component'
import MessageWindow from './components/message-window/message-window.component'
import Intro from './components/intro/intro.component'
import Header from './components/header/header.component'
import ChatInputBox from './components/chat-inputbox/chat-inputbox.component'

import { selectCurrentuser } from './redux/user/user.selectors'


const Dashboard = ({ currentUser }) => {

    return (
        <Fragment >
            <SocketHidden />
            <Header isLoading={currentUser} />
            {
                currentUser ?
                    <DashboardContainer
                        behavior="padding"
                        enabled                        
                    >
                        <MessageWindow />
                        <ChatInputBox />
                    </DashboardContainer>
                    :
                    <Intro />

            }
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
})

export default connect(mapStateToProps)(Dashboard);
