import React from 'react'
import styled from "styled-components"
import Image from "next/image"
import Logo from '../app/assets/logo.svg'
import CheckWindow from '../app/assets/check.svg'
import { Title, SubTitle } from '../app/components/header/index'
import '../app/globals.css'
import SignatureImg from '../app/assets/signature.svg'


const CongratsPageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 60px;

    @media screen and (max-width: 500px) {
        padding: 30px;
    }
`

const TitleWrapper = styled.div`
    width: 100%;
    max-width: 460px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const CongratsLogoWrapper = styled.div`
    margin-bottom: 30px;
`

const SuccessfullyAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px;
    border-radius: 30px;
    background-color: #FBC81D;
    width: 100%;
    height: 220px;
    column-gap: 20px;
    z-index: 2;

    @media screen and (min-width: 500px) {
        max-width: 380px;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        -webkit-box-shadow: 0px 10px 6px 1px rgba(0,0,0,0.04);
        -moz-box-shadow: 0px 10px 6px 1px rgba(0,0,0,0.04);
        box-shadow: 0px 10px 6px 1px rgba(0,0,0,0.04);

        img {
            width: 50px;
            height: 50px;
        }
    }
`

const SuccessfullyAlertTitle = styled.h2`
    font-family: 'CodecProExtrabold';
    font-size: 24px;
    line-height: 24px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 16px;
        width: 150px;
    }
`

const UnderAlert = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        width: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'CodecProNews';
        background-color: white;
        padding: 30px;
        border-radius: 30px;
        position: absolute;
        margin-top: 180px;
    }
`

const UnderTitle = styled.h2`
    font-size: 14px;
    font-weight: 200;
    margin-top: 50px;
`

const BoxWrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;

    @media screen and (max-width: 360px) {
        height: 360px;
    }

    @media screen and (max-width: 330px) {
        height: 380px;
    }

    @media screen and (max-width: 320px) {
        height: 400px;
    }
`

const SignatureWrapper = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        margin: 0 auto;
        img {
            width: 100%;
        }
    }
`

export default function Congrats() {
    return (
        <CongratsPageWrapper>
            <CongratsLogoWrapper>
                <Image
                    src={Logo}
                    width={135}
                    height={25}
                />
            </CongratsLogoWrapper>
            <TitleWrapper>
                <Title>Congrats</Title>
                <SubTitle>You'll be automatically verified for all future orders. Your orders will be dispatched without delay.</SubTitle>
            </TitleWrapper>
            <BoxWrapper>
                <SuccessfullyAlert>
                    <Image
                        src={CheckWindow}
                        width={75}
                        height={75}
                    />
                    <SuccessfullyAlertTitle>You've been successfully verified!</SuccessfullyAlertTitle>
                </SuccessfullyAlert>
                <UnderAlert><UnderTitle>You’ll be automatically verified for all future orders. Your order will be dispatched without delay.</UnderTitle></UnderAlert>
            </BoxWrapper>
            <SignatureWrapper>
                <Image src={SignatureImg} />
            </SignatureWrapper>
        </CongratsPageWrapper>
    )
}
