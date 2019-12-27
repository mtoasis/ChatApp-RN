import styled from 'styled-components'

export const ModalButtonContainer = styled.Text`
    padding: 0 0 0 20px;
    font-size:30px;
    color:white;
`

export const ModalContainer = styled.View`
    background-color:#f2f2f2;
    display:flex;
    align-items:center;
    width:${({ size }) => size === 'large' ? `300px` : `250px`};
    height: ${({ size }) => size === 'large' ? `500px` : `240px`};
    background-color:white;
    elevation:20;
    opacity:0.8;
    margin:auto;
`


export const ModalHeaderContainer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    /* padding-left:20px; */
    width:100%;
    height:40px;
    margin-bottom:15px;
`

export const ModalHeaderText = styled.Text`
    font-size:20px;
`

// export const CloseButtonContainer = styled.View`

// `