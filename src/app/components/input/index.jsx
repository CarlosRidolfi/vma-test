import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    font-family: 'CodecProLight';
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`

const StyledInput = styled.input`
    width: 100%;
    max-width: 500px;
    height: 59px;
    background-color: white;
    border: 1px solid black;
    border-radius: 30px;
    padding-left: 20px;
    font-family: 'CodecProExtralight';
    font-size: 18px;
    margin-top: 20px;
    z-index: 0;

    @media screen and (max-width: 500px) {
        background-color: #F8F8F8 !important;
    }
`

const StyledLabel = styled.label`
    font-family: 'CodecProExtrabold';
    color: black;
    font-weight: 600;
    font-size: 13px;
    position: absolute;
    background-color: white;
    z-index: 3;
    margin-top: 14px;
    margin-left: 23px;
`

export default function Input({labelText, id, onChange, value, name, type, mask, onClick}) {
    return (
        <InputWrapper>
            <StyledLabel>{labelText}</StyledLabel>
            <StyledInput type={type} id={id} onChange={onChange} onClick={onClick} mask={mask} name={name} value={value} placeholder='Please type in...'></StyledInput>
        </InputWrapper>
    )
}
