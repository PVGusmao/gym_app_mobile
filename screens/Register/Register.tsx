import { ButtonComponent } from "../../components/Button/Button";
import { Container, Title } from "./style";
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Register Screen</Title>

      <ButtonComponent
        onPress={() => {
          navigation.goBack();
        }}
        title='Go Back'
        mt={50}
      />
    </Container>
  )
}