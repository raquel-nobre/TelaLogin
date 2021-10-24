import React from 'react';
import { KeyboardView,
       Title,
       Container,
       Input, 
       ButtonSubmit,
       TextButton
    } from './styles';
import Header from '../../components/Header';

function Signin() {
    return(
        <KeyboardView>
            <Header />
            <Container>
              <Title> Arko B.I </Title>
              <Input 
                 placeholderTextColor="red"
                 placeholder="Username ou E-mail"
                 />
              <Input 
                 placeholderTextColor="red"
                 placeholder="Senha"
                 secureTextEntry
              />
              <ButtonSubmit>
                  <TextButton>
                      Entrar
                  </TextButton>
              </ButtonSubmit>
            </Container>          
        </KeyboardView>    
    )
}

export default Signin;