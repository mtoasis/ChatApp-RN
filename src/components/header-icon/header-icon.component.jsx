import React from 'react'
import { Icon } from 'react-native-elements'

const HorizontalPadding={
    paddingHorizontal:10
}

const HeaderIcon = ({ name, type, spread, color }) => (

    <Icon
        name={name}
        type={type}
        size={30}
        color={color}
        iconStyle={[spread? HorizontalPadding: null]} //why square bracket works??? no idea.
    />
)

export default HeaderIcon