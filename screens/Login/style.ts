import styled from "styled-components/native";

export const ScrollViewWrapper = styled.ScrollView`
  background-color: black;
  padding-top: 75px;
`

export const Container = styled.View`
  align-items: center;
  justify-content: space-evenly;

  padding: 20px;

  height: auto;

  background-color: black;
`

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  
  background-color: darkred;

  border: 1px solid white;
  border-radius: 15px;

  padding: 10px;

  /* margin-bottom: 75px; */

  width: 75%;
  height: 350px;
`

export const Link = styled.TouchableOpacity`
  position: absolute;

  bottom: 20px;
`

export const Title = styled.Text`
  color: white;

  font-size: 10px;
  font-weight: bold;
`