import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Lock from '../../assets/lock.svg'
import SignatureImg from '../../assets/signature.svg'

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    color: black;
    margin-top: 50px;
`

const StyledCheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    background-color: white;

    @media screen and (max-width: 500px) {
        background-color: #F8F8F8 !important;
    }
`

const StyledCheckBox = styled.input`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const StyledCheckBoxLabel = styled.label`
    font-family: 'CodecProRegular';
    font-size: 12px;
`

const CoupleButtonsWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    column-gap: 20px;

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        flex-direction: column;
        row-gap: 20px;
    }
`

const SignUpButton = styled.button`
    background-color: #FBC81D;
    border: none;
    border-radius: 40px;
    width: 119px;
    padding: 30px 30px;
    font-family: 'CodecProExtrabold';
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 500px){
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
    }
`

const SignInButton = styled.a`
    background-color: white;
    border: 1px solid black;
    border-radius: 40px;
    padding: 30px 30px;
    font-family: 'CodecProNews';
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 500px){
        width: 100%;
        height: 45px;
        line-height: 0px;
        display: flex;
        justify-content: center;
    }
`

export const Signature = styled.div`
    display: none;

    @media screen and (max-width: 500px){
        display: flex;
        margin-top: 20px;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 50px;
        }
    }
`

export default function ButtonsList({buttonState}) {
    return (
        <ButtonsWrapper>
            <StyledCheckBoxWrapper>
                <StyledCheckBox type='checkbox' id='terms' name='terms' />
                <StyledCheckBoxLabel>Tick this box to confirm you’ve read and agreed to our Terms and Privacy Policy.</StyledCheckBoxLabel>
            </StyledCheckBoxWrapper>
            <Signature>
                <Image src={SignatureImg} />
            </Signature>
            <CoupleButtonsWrapper>
                <SignUpButton type='submit' style={{pointerEvents : buttonState}}>
                    <Image src={Lock} width={21} height={21} />
                    Save
                </SignUpButton>
                <SignInButton target='_blank' href='https://verifymyage.com/'>Got a VerifyMyAge account? Sign in</SignInButton>
            </CoupleButtonsWrapper>
        </ButtonsWrapper>
    )
}
