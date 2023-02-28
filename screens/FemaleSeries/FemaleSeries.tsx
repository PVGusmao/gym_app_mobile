import { useContext, useEffect, useState } from "react";

import { Button, ButtonText, Container, Title } from "./style";

import { useNavigation } from "@react-navigation/native";

import { IMyContext, MyContext } from "../../context/MyContext";

import { getAbdominals, getAbductors, getAdductors, getCalves, getGlutes, getHamstrings, getQuadriceps } from "../../utils/leg/Leg";

export function FemaleSeries() {
  const navigation = useNavigation();
  
  const { selectedDifficulty, selectedType, selectedStyle } = useContext(MyContext) as IMyContext;
  
  const [serie, setSerie] = useState();
  const [abdominals, setAbdominals] = useState([]);
  const [abductors, setAbductors] = useState([]);
  const [adductors, setAdductors] = useState([]);
  const [calves, setCalves] = useState([]);
  const [glutes, setGlutes] = useState([]);
  const [hamstrings, setHamstrings] = useState([]);
  const [quadriceps, setQuadriceps] = useState([]);

  async function MountMySeries() {
    const abs = await getAbdominals(selectedDifficulty);
    setAbdominals(abs);
    
    const abduc = await getAbductors(selectedDifficulty);
    setAbductors(abduc);
    
    const adduc = await getAdductors(selectedDifficulty);
    setAdductors(adduc);
    
    const calv = await getCalves(selectedDifficulty);
    setCalves(calv);
    
    const glut = await getGlutes(selectedDifficulty);
    setGlutes(glut);
    
    const hams = await getHamstrings(selectedDifficulty);
    setHamstrings(hams);
    
    const quad = await getQuadriceps(selectedDifficulty);
    setQuadriceps(quad);

    console.log(abs.length + ' ' + abduc.length + ' ' + adduc.length + ' ' + calv.length + ' ' + glut.length + ' ' + hams.length + ' ' + quad.length)
  }

  return (
    <Container>
      <Title>My Gym Series</Title>

      {/* <Button title="Click me motherfucker" onPress={() => {console.log(selectedDifficulty, selectedType, selectedStyle)}}/> */}
    
      <Button onPress={async () => {
        const serie = await MountMySeries();
        setSerie(serie as any);
      }}>
        <ButtonText>
          Monte Minha Série
        </ButtonText>
      </Button>
    </Container>
  )
}