import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
      flex: 1;
      align-items: center;
      justify-content: center;
      background-color: #210401;
`

export const Container =styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   padding-bottom: 30px;
   width: 90%;
`
export const Title = styled.Text`
color: red;
font-size: 30px;
font-weight: 700;
margin-bottom: 30px;

`

export const Input = styled.TextInput`
  border: 2px solid #fff;
  margin-bottom: 30px;
  padding: 10px 20px;
  color: #fff;
  font-size: 15px;
  border-radius: 9px;
  width: 90%

`

export const ButtonSubmit = styled.TouchableOpacity`
     background-color:#160000;
     border-radius: 9px;
     width: 90%
     padding: 10px 20px;
     align-items: center;

`

export const TextButton = styled.Text`
     color: #fff;
     font-size: 20px;
     font-weight: bold;

`

 
  