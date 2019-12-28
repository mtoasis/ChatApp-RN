import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import SocketHidden from './components/socket-hidden/socket-hidden.component'
import MessageWindow from './components/message-window/message-window.component'
import Intro from './components/intro/intro.component'

import Header from './components/header/header.component'
import { selectCurrentuser } from './redux/user/user.selectors'


const Dashboard = ({ currentUser }) => {

    return (
        <Fragment>
            <SocketHidden />
            <Header isLoading={currentUser} />
            {
                currentUser ?
                    <Fragment>                        
                        <MessageWindow />
                    </Fragment>
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
