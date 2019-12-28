  
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserList } from '../../redux/user/user.selectors'
import { UserListContainer, UsernameContainer, UsernameContainerText } from './user-list.styles'
// import { AiOutlineSmile } from ''

const UserList = ({ userList }) => {

    return (
        <UserListContainer>
            {
                userList.map((userName, i) =>
                    <UsernameContainer key={i}>
                        <UsernameContainerText>
                            {/* <AiOutlineSmile /> */}
                            {userName}
                        </UsernameContainerText>

                    </UsernameContainer>
                )
            }
        </UserListContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
})

export default connect(mapStateToProps)(UserList)