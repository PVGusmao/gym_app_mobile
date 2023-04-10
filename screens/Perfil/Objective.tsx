import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { IMyContext, MyContext } from "../../context/MyContext";

import { Select } from "../../components/Select/Select";

import { difficulty, objective, style } from "../../constants/Texts";
import { ButtonContainer, ButtonText, Container } from "./style";

export function Objective() {
  const { selectedObjective, setSelectedObjective,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedType,
    setSelectedType,
    selectedStyle,
    setSelectedStyle, } = useContext(MyContext) as IMyContext;

  const navigation = useNavigation();

  return (
    <Container>
      <Select
        filter={objective}
        state={selectedObjective}
        setState={setSelectedObjective}
      />

      <Select
        filter={style}
        state={selectedStyle}
        setState={setSelectedStyle}
      />

      <Select
        filter={difficulty}
        state={selectedDifficulty}
        setState={setSelectedDifficulty}
      />

      <ButtonContainer
        disabled={selectedObjective === 'None' || selectedDifficulty === 'None' || selectedStyle === 'None' ? true : false}
        onPress={() => {navigation.navigate('Home')}}
      >
        <ButtonText>Avançar</ButtonText>
      </ButtonContainer>
    </Container>
  )
}