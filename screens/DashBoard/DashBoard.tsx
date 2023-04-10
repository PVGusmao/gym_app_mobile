import { Animated, } from "react-native";
import { useEffect, useRef } from "react";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { Container, ContainerTextField, TextField } from "./style";

import { ButtonComponent } from "../../components/Button/Button";

import api from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function DashBoard() {
  const navigation = useNavigation();

  async function getUserData() {
    try {
      const email = await AsyncStorage.getItem('@email');
      console.log(email);
      const response = await api.get(`/register/${email}`);
      await AsyncStorage.setItem('@gender', response?.data?.gender === 'M' ? "Masculino" : "Feminino");
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
        navigation.navigate('Perfil')
      }} />
    </Container>
  )
}
