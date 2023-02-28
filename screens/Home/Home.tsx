import React, { useContext, useEffect, useState } from 'react';
import { IMyContext, MyContext } from '../../context/MyContext';

import { ButtonContainer, ButtonText, Container, SimpleText } from "./style";

import { Select } from "../../components/Select/Select";
import { useNavigation } from '@react-navigation/native';

import { difficulty, type, maleStyle, femaleStyle, objective } from '../../constants/Texts';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ExercisesInterface {
  difficulty: string;
  equipment: string;
  instructions: string;
  muscle: string;
  name: string;
  type: string;
}

export function Home() {
  const navigation = useNavigation();

  const [genderState, setGenderState] = useState('');

  const {
    selectedDifficulty,
    setSelectedDifficulty,
    selectedType,
    setSelectedType,
    selectedStyle,
    setSelectedStyle,
    selectedObjective,
  } = useContext(MyContext) as IMyContext;

  async function getGenderFromStorage() {
    const gender = await AsyncStorage.getItem('@gender');
    console.log(gender);
    setGenderState(gender as string);
    return gender;
  }

  useEffect(() => {
    getGenderFromStorage();
  }, [])

  return (
    <>
    <Container>

      <SimpleText>{`Escolha o tipo dos exercícios`}</SimpleText>

      <Select
        filter={type}
        state={selectedType}
        setState={setSelectedType}
      />

      <SimpleText>{`Escolha a dificuldade dos exercícios`}</SimpleText>

      <Select
        filter={difficulty}
        state={selectedDifficulty}
        setState={setSelectedDifficulty}
      />

      <SimpleText>{`Escolha o estilo dos exercícios`}</SimpleText>

      <Select
        filter={genderState === 'Masculino' ? maleStyle : femaleStyle}
        state={selectedStyle}
        setState={setSelectedStyle}
      />
      
    </Container>

      <ButtonContainer
        disabled={
          selectedType === 'None' || selectedDifficulty === 'None' || selectedStyle === 'None' ? true : false
        }
        onPress={() => {genderState === 'Masculino' ? navigation.navigate('Male Series') : navigation.navigate('Female Series') }}>
        <ButtonText>Request Series</ButtonText>
      </ButtonContainer>
    </>
  );
}
