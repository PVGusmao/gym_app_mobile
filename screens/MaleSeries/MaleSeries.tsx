import { useContext, useEffect, useState } from "react";

import { Button, ButtonText, Container, Title } from "./style";

import { useNavigation } from "@react-navigation/native";

import { IMyContext, MyContext } from "../../context/MyContext";

import { getChest } from "../../utils/Chest/Chest";
import { getBiceps } from "../../utils/Biceps/Bicpes";
import { getTriceps } from "../../utils/Triceps/Triceps";
import { getLowerBack, getMiddleBack, getLats } from "../../utils/Back/Back";
import { getAbdominals, getAbductors, getAdductors, getCalves, getGlutes, getHamstrings, getQuadriceps } from "../../utils/leg/Leg";

export function MaleSeries() {
  const navigation = useNavigation();
  
  const { selectedDifficulty, selectedType, selectedStyle, selectedObjective } = useContext(MyContext) as IMyContext;
  
  const [serie, setSerie] = useState();
  const [abdominals, setAbdominals] = useState([]);
  const [abductors, setAbductors] = useState([]);
  const [adductors, setAdductors] = useState([]);
  const [biceps, setBiceps] = useState([]);
  const [calves, setCalves] = useState([]);
  const [chest, setChest] = useState([]);
  const [glutes, setGlutes] = useState([]);
  const [hamstrings, setHamstrings] = useState([]);
  const [lats, setLats] = useState([]);
  const [lowerBack, setLowerBack] = useState([]);
  const [middleBack, setMiddleBack] = useState([]);
  const [quadriceps, setQuadriceps] = useState([]);
  const [traps, setTraps] = useState([]);
  const [triceps, setTriceps] = useState([]);

  async function MountMySeries() {
    const ADay = {}
    const BDay = {}
    const CDay = {}

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

    const ches = await getChest(selectedDifficulty);
    setChest(ches);

    const bice = await getBiceps(selectedDifficulty);
    setBiceps(bice);
    
    const tric = await getTriceps(selectedDifficulty);
    setTriceps(tric);
    
    const loba = await getLowerBack(selectedDifficulty);
    setLowerBack(loba);
    
    const miba = await getMiddleBack(selectedDifficulty);
    setMiddleBack(miba);
    
    const lat = await getLats(selectedDifficulty);
    setLats(lat);

    if (selectedStyle === 'ABC') {
      
    } else {
      const DDay = {}
      const EDay = {}
    }
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