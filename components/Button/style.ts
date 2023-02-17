import styled from "styled-components/native";

type Props = {
  bgColor?: 'OUTLINE' | 'FILLED';
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  bRadius?: number;
  fontSize?: number;
  height?: number;
  width?: number;
}

export const Button = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;
  width: ${props=> props.width ? props.width : 75}%;
  height: ${props=> props.height ? props.height : 35}px;

  margin-top: ${props=> props.mt ? props.mt : 0}px;
  margin-bottom: ${props=> props.mb ? props.mb : 0}px;
  margin-left: ${props=> props.ml ? props.ml : 0}px;
  margin-right: ${props=> props.mr ? props.mr : 0}px;

  border-radius: ${props=> props.bRadius ? props.bRadius : 0}px;

  background-color: ${props => props.bgColor == 'FILLED' ? 'green' : 'darkred'};
  border: 1px solid ${props => props.bgColor == 'FILLED' ? 'green' : 'rgba(255, 255, 255, 0.5)'};

`

export const Title = styled.Text<Props>`
  font-weight: bold;
  color: white;
  font-size: ${props => props.fontSize ? props.fontSize : 0}px;
`
