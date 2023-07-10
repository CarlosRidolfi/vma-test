'use client'

import React from 'react'
import styled from 'styled-components'
import StyledInput from './components/input'
import Header from './components/header'
import ButtonsList from './components/buttons'
import { useRouter }  from 'next/navigation'

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 60px;

  @media screen and (max-width: 500px){
      padding: 30px;
  }
`

const Formulary = styled.form`
`

const InputList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 10px;
`

const Message = styled.p`
  margin-top: 10px;
  color: red;
  font-family: 'CodecProRegular';
`

export default function Home() {
  const router = useRouter()

  const [message, setMessage] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [cellphone, setCellphone] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const handleName = (e) => {
    setFullName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleEmail= (e) => {
    setEmail(e.target.value)
  }

  const handleCellphone = (e) => {
    setCellphone(e.target.value)
  }

  const handleSubmit = () => {
    event.preventDefault()

    if (fullName.length == 0) {
      setMessage('Preencha o nome corretamente')
    } else if (email.length == 0) {
      setMessage('Preencha o email corretamente')
    } else if (cellphone.length == 0) {
      setMessage('Preencha o telefone corretamente')
    } else if (password.length < 8) {
      setMessage('Sua senha deve possuir mais de 8 caracteres')
    } else {
      router.push('/congrats')
    }
  }

  return (
    <main>
      <LoginWrapper>
        <Header />
          <Formulary onSubmit={handleSubmit}>
            <InputList>
              <StyledInput labelText="Full name" type="text" id="name" value={fullName} onChange={handleName} />
              <StyledInput labelText="Email" id="email" name="email" type="email" value={email} onChange={handleEmail}/>
              <StyledInput labelText="Mobile" type="number" id="cellPhone" value={cellphone} onChange={handleCellphone}/>
              <StyledInput labelText="Password" id="password" type="password" value={password} onChange={handlePassword} />
            </InputList>
            <Message>{message}</Message>
            <ButtonsList/> 
          </Formulary>
      </LoginWrapper>
    </main>
  )
}
