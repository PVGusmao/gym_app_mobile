import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { IMyContext, MyContext } from "../../context/MyContext";

import { Select } from "../../components/Select/Select";

import { objective } from "../../constants/Texts";
import { ButtonContainer, ButtonText, Container } from "./style";

export function Objective() {
  const { selectedObjective, setSelectedObjective } = useContext(MyContext) as IMyContext;

  const navigation = useNavigation();

  return (
    <Container>
      <Select
        filter={objective}
        state={selectedObjective}
        setState={setSelectedObjective}
      />

      <ButtonContainer disabled={selectedObjective === 'None' ? true : false} onPress={() => {navigation.navigate('Home')}}>
        <ButtonText>Avançar</ButtonText>
      </ButtonContainer>
    </Container>
  )
}