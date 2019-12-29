import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { TouchableOpacity } from 'react-native'

import { GifImageContainer, GifImageElement, SubmitButtonContainer, ButtonText } from './gif-modal.styles'

import { selectUserId, selectCurrentuser } from '../../redux/user/user.selectors'
import { selectCurrentGif } from '../../redux/gif/gif.selector'
import { getGifStart } from '../../redux/gif/gif.action'
import { sendNewMessageStart } from '../../redux/chat/chat.actions'

import FormInput from '../form-input/form-input.component'

const GifModal = ({ currentUser, userId, getGifStart, gifData, sendNewMessageStart, setModalDisplay }) => {

    const [gifSearchTerm, setGifSearchTerm] = useState("")

    const handleChange = (value) => {
        setGifSearchTerm(value)
    }

    const handleSubmit = () => {
        getGifStart(gifSearchTerm)
        setGifSearchTerm("")
    }

    return (
        <Fragment>
            {gifData.length ?
                <GifImageContainer>
                    {gifData.map(element => (
                        <TouchableOpacity
                            key={element.id}
                            onPress={() => {
                                console.log(element.images)
                                sendNewMessageStart(
                                    {
                                        currentUser,
                                        userId,
                                        url: element.images.downsized.url
                                    })
                                setModalDisplay(false)
                            }
                            }
                        >
                            <GifImageElement
                                source={{ uri: `${element.images.downsized_still.url}` }}
                            />
                        </TouchableOpacity>
                    ))}
                </GifImageContainer>
                : null}

            <FormInput
                type="text"
                value={gifSearchTerm}
                label="Search term"
                handleChange={handleChange}
                required
            />
            <SubmitButtonContainer
                onPress={() => handleSubmit()}
            >
                <ButtonText>Search!</ButtonText>
            </SubmitButtonContainer>

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    gifData: selectCurrentGif,
    currentUser: selectCurrentuser,
    userId: selectUserId
})

const mapDispatchToProps = dispatch => ({
    getGifStart: (gifSearchTerm) => dispatch(getGifStart(gifSearchTerm)),
    sendNewMessageStart: (msgInfo) => dispatch(sendNewMessageStart(msgInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(GifModal)