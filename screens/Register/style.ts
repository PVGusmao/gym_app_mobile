import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: white;

  padding: 10px;
`

export const ContainerInputIcon = styled.View`
  flex-direction: row;

  border: 1px solid rgba(161, 161, 161, 1);
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  margin-top: 20px;

  height: 50px;
  `

export const StyledInput = styled.TextInput`

  padding: 10px;

  font-size: 15px;

  width: 100%;
`

export const ErrorLine = styled.Text`
  color: red;

  font-weight: bold;

  margin-left: 10px;
  margin-top: 5px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;

  text-align: center;
`

export const ButtonWrapper = styled.View`
  align-items: center;
`
