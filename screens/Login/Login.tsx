import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../components/Button/Button";
import { CustomInput } from "../../components/CustomInput/CustomInut";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Container, InputWrapper, Link, ScrollViewWrapper, Title } from "./style";

export function Login() {
  const navigation = useNavigation();

  return (
    <ScrollViewWrapper>
      <Header />
      <Container>

        <InputWrapper>
      
          <CustomInput
            placeholder="E-mail"
            placeholderColor="white"
          />
          <CustomInput
            placeholder="Password"
            placeholderColor="white"
          />

          <ButtonComponent
            mt={30}
            mb={10}
            bRadius={10}
            title='Logar'
          />
          <ButtonComponent
            onPress={() => navigation.navigate('Register')}
            bgColor="OUTLINE"
            bRadius={10}
            title='Cadastrar'
          />

          <Link>
            <Title>
              Esqueceu sua senha? Clique aqui!
            </Title>
          </Link>
      
        </InputWrapper>

      </Container>
      
      <Footer />
    </ScrollViewWrapper>
  )
}