import styled from "styled-components/native";

type Props = {
  bgColor?: string;
  borderBotomColor?: string;
  fontColor?: string;
}

export const Input = styled.TextInput<Props>`
  background-color: ${props => props.bgColor};

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.borderBotomColor};

  height: 40px;
  width: 100%;

  padding: 10px;

  border-radius: 10px;

  color: ${props => props.fontColor};

  margin: 5px;
`
