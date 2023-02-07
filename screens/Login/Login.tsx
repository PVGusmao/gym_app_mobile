import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, InputWrapper, Link, ScrollViewWrapper, Title } from "./style";

import { useNavigation } from "@react-navigation/native";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ButtonComponent } from "../../components/Button/Button";
import { CustomInput } from "../../components/CustomInput/CustomInut";
import { api } from "../../utils/api";

export function Login() {
  const navigation = useNavigation();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  async function loginUser() {
    const response = await api.post('/login', login);
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(response));
    } catch (e) {
      throw new Error('Could not make the request, please, see if email or password is corret.')
    }
  }

  return (
    <ScrollViewWrapper>
      <Header />
      <Container>

        <InputWrapper>
      
          <CustomInput
            placeholder="E-mail"
            placeholderColor="white"
            bgColor="darkred"
            borderBotomColor="white"
            onChange={(text: string) => setLogin({...login, email: text})}
          />
          <CustomInput
            placeholder="Password"
            placeholderColor="white"
            bgColor="darkred"
            borderBotomColor="white"
            secureTextEntry={true}
            onChange={(text: string) => setLogin({...login, password: text})}
          />

          <ButtonComponent
            mt={30}
            mb={10}
            bRadius={10}
            title='Logar'
            onPress={loginUser}
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
      
      <Footer colorTitle='white' />
    </ScrollViewWrapper>
  )
}