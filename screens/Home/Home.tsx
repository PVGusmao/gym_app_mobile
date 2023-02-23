import React, { useContext } from 'react';
import { IMyContext, MyContext } from '../../context/MyContext';

import { ButtonContainer, ButtonText, Container, SimpleText } from "./style";

import { Select } from "../../components/Select/Select";
import { useNavigation } from '@react-navigation/native';

import { difficulty, type, style } from '../../constants/Texts';

import api from '../../utils/api';

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

  const {
    selectedDifficulty,
    setSelectedDifficulty,
    selectedType,
    setSelectedType,
    selectedStyle,
    setSelectedStyle,
    email,
  } = useContext(MyContext) as IMyContext;

  async function getUserData() {
    try {
      const response = await api.get('/register/pvmg1@hotmail.com');
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

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
        filter={style}
        state={selectedStyle}
        setState={setSelectedStyle}
      />
      
    </Container>

      <ButtonContainer
        disabled={
          selectedType === 'None' || selectedDifficulty === 'None' || selectedStyle === 'None' ? true : false
        }
        onPress={() => { navigation.navigate('Series') }}>
        <ButtonText>Request Series</ButtonText>
      </ButtonContainer>
    </>
  );
}
