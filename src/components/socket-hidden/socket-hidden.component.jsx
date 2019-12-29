import React, {Fragment} from 'react'
// import { View, YellowBox } from 'react-native'
import { socket } from '../../socket-io/socket-io.utils'
import { initializeUserIdStart, userListUpdateStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

class SocketHidden extends React.Component {

    constructor() {
        super()
        this.state = {
            isUserId: false
        }
    }

    componentDidMount() {
        this.userConnected()
        this.receiveUserId()
        this.userListUpdate()
    }

    receiveUserId = () => {
        console.log('receiving userId...')
        const { initializeUserIdStart } = this.props;
        const self = this;
        socket.on('userId', ({ userId }) => {
            console.log(`userId is ...${self.state.isUserId}`)
            if (!self.state.isUserId) {
                self.setState({ isUserId: true })
                initializeUserIdStart(userId)
            }
            else {
                // console.log("userId exists")
            }
        })
    }

    userConnected = (currentUser) => {
        socket.emit('userConnected', {
            userName: currentUser
        })
    }

    userListUpdate = () => {
        const { userListUpdateStart } = this.props;
        socket.on('userList', (userList) => {
            userListUpdateStart(userList)
        })
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    initializeUserIdStart: (userId) => dispatch(initializeUserIdStart(userId)),
    userListUpdateStart: (userList) => dispatch(userListUpdateStart(userList))
})

export default connect(null, mapDispatchToProps)(SocketHidden)