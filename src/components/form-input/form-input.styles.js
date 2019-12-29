import styled, {css} from 'styled-components'

export const FormInputContainer = styled.TextInput`
    background-color: white;
    width:${({large})=>large? `87%`: `200px`};
    height:40px;
`