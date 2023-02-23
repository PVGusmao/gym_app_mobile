import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { Container, Title } from "./style";

export function Series() {
  const navigation = useNavigation();
  
  const { selectedDifficulty, selectedType, selectedStyle } = useContext(MyContext) as IMyContext;
  
  return (
    <Container>
      <Title>My Gym Series</Title>
    </Container>
  )
}