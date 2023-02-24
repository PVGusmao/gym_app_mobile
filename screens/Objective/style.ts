import styled from 'styled-components/native';

type Props = {
  disabled?: boolean;
}

export const Container = styled.View`
  padding: 20px;
`

export const ButtonContainer = styled.TouchableOpacity<Props>`
  margin: 20px;
  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 20px;

  background-color: darkgreen;

  opacity: ${props=> props.disabled ? 0.5 : 1};
`

export const ButtonText = styled.Text`
  color: white;

  font-size: 16px;
  font-weight: bold;
`

export const SimpleText = styled.Text`
  margin-top: 20px;

  font-size: 16px;
  
`
