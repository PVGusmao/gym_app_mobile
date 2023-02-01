import styled from "styled-components/native";

type Props = {
  colorTitle?: string;
}

export const Container = styled.View`
  align-items: center;

  width: 100%;
`

export const Title = styled.Text<Props>`
  color: ${props => props.colorTitle};
`