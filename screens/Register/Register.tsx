import { ButtonComponent } from "../../components/Button/Button";
import { Container, Title } from "./style";
import { useNavigation } from '@react-navigation/native';
import { CustomInput } from "../../components/CustomInput/CustomInut";
import { Footer } from "../../components/Footer/Footer";

export function Register() {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Register Screen</Title>

      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Qual seu nome?"
      />
      
      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Qual seu sobrenome?"
      />
      
      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Quando você nasceu?"
      />
      
      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Qual gênero você se identifica?"
      />
      
      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Qual seu e-mail?"
      />
      
      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Cadastre uma senha"
      />

      <CustomInput
        fontColor='black'
        borderBotomColor="black"
        placeholder="Confirme sua senha"
      />
      
      <ButtonComponent
        onPress={() => { console.log('Cadastrado Cuzão')}}
        title='Registrar'
        mt={25}
      />

      <ButtonComponent
        bgColor="OUTLINE"
        onPress={() => {
          navigation.goBack();
        }}

        title='Voltar'
        mt={10}
      />

      <Footer colorTitle='black' />
    </Container>
  )
}