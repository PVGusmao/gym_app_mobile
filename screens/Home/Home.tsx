import React, { useContext, useState } from 'react';
import { IMyContext, MyContext } from '../../context/MyContext';

import { ButtonContainer, ButtonText, Container } from "./style";

import { Select } from "../../components/Select/Select";
import { useNavigation } from '@react-navigation/native';

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

  const { selectedDifficulty, setSelectedDifficulty, selectedType, setSelectedType } = useContext(MyContext) as IMyContext;

  const difficulty = [
    'Beginner',
    'Intermediate',
    'Expert'
  ];

  const type = [
    'Cardio',
    'Olympic Weightlifting',
    'Plyometrics',
    'Powerlifting',
    'Strength',
    'Stretching',
    'Strongman'
  ]

  return (
    <>
    <Container>

      <Select
        titleWord="tipo"
        filter={type}
        state={selectedType}
        setState={setSelectedType}
      />

      <Select
        titleWord="nível"
        filter={difficulty}
        state={selectedDifficulty}
        setState={setSelectedDifficulty}
      />
      
    </Container>
      <ButtonContainer disabled={selectedType === 'None' || selectedDifficulty === 'None' ? true : false} onPress={() => {navigation.navigate('Series')}}>
        <ButtonText>Request Series</ButtonText>
      </ButtonContainer>
    </>
  );
}
