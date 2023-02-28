import styled from "styled-components/native";

export const Container = styled.View`
  background-color: darkgray;

  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  background-color: red;
  
  width: 200px;
  height: 50px;

  border-radius: 15px;
`

export const ButtonText = styled.Text`
  color: white;

  font-weight: bold;
  font-size: 18px;

`

export const Title = styled.Text`
  font-size: 16px;
`