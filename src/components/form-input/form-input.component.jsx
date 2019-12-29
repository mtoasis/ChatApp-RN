import React from 'react'
import {FormInputContainer} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (

        <FormInputContainer onChangeText={handleChange} {...otherProps} />
)

export default FormInput