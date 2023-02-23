import { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, InputWrapper, Link, ScrollViewWrapper, Title } from "./style";

import { useNavigation } from "@react-navigation/native";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ButtonComponent } from "../../components/Button/Button";
import { CustomInput } from "../../components/CustomInput/CustomInut";

import api from "../../utils/api";
import { Button } from "react-native";
import { IMyContext, MyContext } from "../../context/MyContext";

export function Login() {
  const { setToken, validation, setValidation, setEmail } = useContext(MyContext) as IMyContext;

  const navigation = useNavigation();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  async function loginUser() {
    try {
      const response = await api.post('/login', login);
      setToken(response?.data?.token);
      await AsyncStorage.setItem('token', JSON.stringify(response?.data?.token));
      setValidation(!validation);
    } catch(e) {
      console.log(e);
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
            onChange={(text: string) => {
              setLogin({...login, email: text})
              setEmail(text);
            }}
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
            fontSize={16}
          />
          <ButtonComponent
            onPress={() => navigation.navigate('Register')}
            bgColor="OUTLINE"
            bRadius={10}
            title='Cadastrar'
            fontSize={16}
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