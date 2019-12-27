import io from 'socket.io-client'

export const socket = io('https://chatapp-mrj.herokuapp.com:80', {
    secure: true,
    rejectUnauthorized: false,
})

export const userConnected = (currentUser) =>{
    socket.emit('userConnected', {
        userName: currentUser
    })
}

export const sendChatAction = (currentUser, userId, newMsg, url) =>{    

    if (newMsg !== '') {
        let newChat = {
            from: currentUser,
            msg: newMsg,
            topic: 'General',
            userName: currentUser,
            userId,
            url,
        }
        socket.emit('chat message', newChat)
    }
}

export const receiveMessage = ()=>{
    socket.on('chat message', function (msg) {
    })
}

export const sendUserNameUpdate = (oldUserName, newUserName, userId )=>{
    socket.emit('userNameChange', {
        oldUserName,
        newUserName,
        userId
    })
    if(!oldUserName){
        userConnected(newUserName)
    }
}

export const receiveUserId = () =>{
    let userId = null;
    socket.on('userId', function(userId){       
           
    })
    return userId    
}