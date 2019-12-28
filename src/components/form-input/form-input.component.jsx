import React from 'react'
import {GroupContainer, FormInputContainer, FormInputLabelContainer} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (

        <FormInputContainer onChangeText={handleChange} {...otherProps} />
)

export default FormInput