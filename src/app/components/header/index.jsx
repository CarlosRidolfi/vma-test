import React from "react"
import styled from "styled-components"
import Logo from '../../assets/logo.svg'
import BackArrow from '../../assets/back-arrow.svg'
import Image from "next/image"

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
`

const MobileHeaderWrapper = styled.div`
    @media screen and (max-width: 500px){
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        align-items: center;
    }
`

export const LogoWrapper = styled.div`
    margin-bottom: 60px;

    @media screen and (max-width: 500px){
        display: none;
    }
`

const BackArrowButton = styled.button`
    background: none;
    border: none;
    width: 10px;
    cursor: pointer;

    img {
        @media screen and (max-width: 500px){
            width: 30px;
            height: 30px;
        }
    }
`

export const Title = styled.h1`
    font-family: 'CodecProExtrabold';
    font-size: 36px;
    font-weight: 600;
    line-height: 46px;
    margin-top: 20px;

    @media screen and (max-width: 500px){
        font-size: 20px;
        margin-top: 0px;
    }
`

export const SubTitle = styled.p`
    font-family: 'CodecProNews';
    font-size: 18px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 50px;

    @media screen and (max-width: 500px){
        margin-top: 5px;
        margin-left: 40px;
        margin-bottom: 20px;
        font-size: 16px;
    }
`

export default function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Image
                    src={Logo}
                    width={135}
                    height={25}
                />
            </LogoWrapper>
            <MobileHeaderWrapper>
                <BackArrowButton>
                    <Image 
                        src={BackArrow}
                        width={44}
                        height={44}
                    />
                </BackArrowButton>
                <Title>Join VerifyMyAge</Title>
            </MobileHeaderWrapper>
            <SubTitle>Let's start by setting up your login details.</SubTitle>
        </HeaderWrapper>
    )
} 