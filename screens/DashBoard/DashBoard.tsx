import { Animated, } from "react-native";
import { useContext, useEffect, useRef } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { Container, ContainerTextField, TextField } from "./style";

import { ButtonComponent } from "../../components/Button/Button";

import api from "../../utils/api";

export function DashBoard() {
  const navigation = useNavigation();

  const { email } = useContext(MyContext) as IMyContext;

  async function getUserData() {
    try {
      const response = await api.get(`/register/${email}`);
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, [])

  return (
    <Container>
      <StatusBar translucent/>

      <Animated.View style={[{opacity: fadeAnim }]}>
        <ContainerTextField>
          <TextField>Seja bem vindo ao GymApp</TextField>
        </ContainerTextField>

        <ContainerTextField>
          <TextField>Aqui você tem o melhor treino</TextField>
        </ContainerTextField>
        
        <ContainerTextField>
          <TextField>E a melhor dieta pra sua rotina</TextField>
        </ContainerTextField>
        
        <ContainerTextField>
          <TextField>Você já está quase lá</TextField>
        </ContainerTextField>
        
        <ContainerTextField>
          <TextField>Vamos apenas fazer umas perguntas</TextField>
        </ContainerTextField>
        
        <ContainerTextField>
          <TextField>Para podermos saber o seu perfil</TextField>
        </ContainerTextField>
      </Animated.View>

      <ButtonComponent
        fontSize={14}
        height={50}
        mt={150}
        bRadius={30}
        title='Clique aqui para montarmos seu perfil'
        onPress={() => {
        getUserData();
        navigation.navigate('Home')
      }} />
    </Container>
  )
}
