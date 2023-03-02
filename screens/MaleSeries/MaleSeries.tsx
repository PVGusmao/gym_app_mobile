import { useContext, useEffect, useState } from "react";

import { Button, ButtonText, Container, Title } from "./style";

import { Button as RNButton } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { IMyContext, MyContext } from "../../context/MyContext";

import { getChest } from "../../utils/Chest/Chest";
import { getBiceps } from "../../utils/Biceps/Bicpes";
import { getTriceps } from "../../utils/Triceps/Triceps";
import { getLowerBack, getMiddleBack, getLats } from "../../utils/Back/Back";
import { getAbdominals, getAbductors, getAdductors, getCalves, getGlutes, getHamstrings, getQuadriceps } from "../../utils/leg/Leg";
import { getTraps } from "../../utils/Shoulder/Shoulder";
import { ActivityIndicator } from "react-native";
import api, { getToken } from "../../utils/api";

export function MaleSeries() {
  const navigation = useNavigation();
  
  const { selectedDifficulty, selectedType, selectedStyle, selectedObjective, loading, setLoading } = useContext(MyContext) as IMyContext;
  
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

  function randomElements(array: string[]) {
    const n = array.length;
    const index1 = Math.floor(Math.random() * n);
    let index2 = Math.floor(Math.random() * n);
    
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * n);
    }
    
    const randomArray = [array[index1], array[index2]];
    
    array.splice(index2, 1);
    array.splice(index1, 1);
    
    return randomArray;
  }

  function teste(group: any, lastNumber: number | null) {
    let randomNumber = Math.floor(Math.random() * group.length);
          
    while(randomNumber === lastNumber) {
      randomNumber = Math.floor(Math.random() * 10);
    }

    lastNumber = randomNumber;

    return randomNumber;
  }

  async function MountMySeries() {

    let ADay = {}
    let BDay = {}
    let CDay = {}

    setLoading(true);

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

    const trap = await getTraps(selectedDifficulty);
    setTraps(trap);

    if (selectedStyle === 'ABC') {
      let lastNumber = null;

      let calvesArray: string[] = [];
      let quadricepsArray: string[] = [];
      let abductorsArray: string[] = [];
      let adductorsArray: string[] = [];
      let hamstringsArray: string[] = [];
      let glutesArray: string[] = [];

      let abdominalsArray: string[] = [];
      
      let chestArray: string[] = [];
      let tricepsArray: string[] = [];
      
      let latsArray: string[] = [];
      let lowerBackArray: string[] = [];
      let middleBackArray: string[] = [];
      let bicepsArray: string[] = [];
      
      let trapsArray: string[] = [];

      if (selectedDifficulty === 'Beginner') {
        const twoRepetitionsObject = {
          quadricepsArray,
          abdominalsArray,
          lowerBackArray,
          middleBackArray,
          bicepsArray,
        }
  
        const threeRepetitionsObject = {
          chestArray,
          tricepsArray,
        }
  
        const fiveRepetitionsObject = {
          trapsArray
        }
  
        const oneRepetitionObject = {
          calvesArray,
          abductorsArray,
          adductorsArray,
          hamstringsArray,
          glutesArray,
        }

      // Duas repetições;
        // for (let i = 0; i < 1; i += 1) {
        //   let randomNumber = Math.floor(Math.random() * 10);
          
        //   while(randomNumber === lastNumber) {
        //     randomNumber = Math.floor(Math.random() * 10);
        //   }
          
        //   lastNumber = randomNumber

        //   quadricepsArray.push(quad[randomNumber]);

        //   abdominalsArray.push(abs[randomNumber]);
          
        //   lowerBackArray.push(loba[randomNumber]);
        //   middleBackArray.push(miba[randomNumber]);
          
        //   bicepsArray.push(bice[randomNumber]);
        // }

        for (let i = 0; i < 2; i += 1) {
          const quadRandomNumber = teste(quad, lastNumber);
          quadricepsArray.push(quad[quadRandomNumber]);
          
          const absRandomNumber = teste(abs, lastNumber);
          abdominalsArray.push(abs[absRandomNumber]);

          const lowerBackRandomNumber = teste(loba, lastNumber);
          lowerBackArray.push(loba[lowerBackRandomNumber]);

          const middleBackRandomNumber = teste(miba, lastNumber);
          middleBackArray.push(miba[middleBackRandomNumber]);

          const bicepsRandomNumber = teste(bice, lastNumber);          
          bicepsArray.push(bice[bicepsRandomNumber]);
        }

        // Três repetições;
        for (let i = 0; i < 3; i += 1) {
          const chestRandomNumber = teste(ches, lastNumber);          
          chestArray.push(ches[chestRandomNumber]);
          
          const tricepsRandomNumber = teste(tric, lastNumber);          
          tricepsArray.push(tric[tricepsRandomNumber]);
        }

        // Cinco repetições;
        for (let i = 0; i < 5; i += 1) {
          const trapRandomNumber = teste(trap, lastNumber);          
          trapsArray.push(trap[trapRandomNumber]);    
        }

        // Uma repetição;
        calvesArray.push(calv[Math.floor(Math.random())]);
        abductorsArray.push(abduc[Math.floor(Math.random())]);
        adductorsArray.push(adduc[Math.floor(Math.random())]);
        hamstringsArray.push(hams[Math.floor(Math.random())]);
        glutesArray.push(glut[Math.floor(Math.random())]);

        ADay = {
          chest: chestArray,
          shoulder: randomElements(trapsArray),
          triceps: tricepsArray,
        }

        BDay = {
          back: [...lowerBackArray, ...middleBackArray],
          biceps: bicepsArray,
          shoulder: randomElements(trapsArray),
        }

        CDay = {
          quadrieps: quadricepsArray,
          abductors: abductorsArray,
          adductors: adductorsArray,
          hamstrings: hamstringsArray,
          glutes: glutesArray,
        }

        const serie = {
          ADay,
          BDay,
          CDay,
        }

        setLoading(false);

        console.log(serie);

        return serie;
      }

      if (selectedDifficulty === 'Intermediate') {
        // Duas repetições;
        for (let i = 0; i < 1; i += 1) {
          let randomNumber = Math.floor(Math.random() * 10);
          
          while(randomNumber === lastNumber) {
            randomNumber = Math.floor(Math.random() * 10);
          }
          
          lastNumber = randomNumber

          // 3


          abdominalsArray.push(abs[randomNumber]);
          lowerBackArray.push(loba[randomNumber]);          
        }

        // Três repetições;
        for (let i = 0; i < 2; i += 1) {
          let randomNumber = Math.floor(Math.random() * 10);
          
          while(randomNumber === lastNumber) {
            randomNumber = Math.floor(Math.random() * 10);
          }
          
          lastNumber = randomNumber

          quadricepsArray.push(quad[randomNumber]);
          tricepsArray.push(tric[randomNumber]);
          bicepsArray.push(bice[randomNumber]);
          middleBackArray.push(miba[randomNumber]);
          
        }

        // Quatro repetições;
        for (let i = 0; i < 3; i += 1) {
          let randomNumber = Math.floor(Math.random() * 10);
          
          while(randomNumber === lastNumber) {
            randomNumber = Math.floor(Math.random() * 10);
          }
          
          lastNumber = randomNumber;
          chestArray.push(ches[randomNumber]);
        }

        // Cinco repetições;
        for (let i = 0; i < 4; i += 1) {
          let randomNumber = Math.floor(Math.random() * 10);
          
          while(randomNumber === lastNumber) {
            randomNumber = Math.floor(Math.random() * 10);
          }
          
          lastNumber = randomNumber;
          trapsArray.push(trap[randomNumber]);    
        }

        // Uma repetição;
        calvesArray.push(calv[Math.floor(Math.random())]);
        abductorsArray.push(abduc[Math.floor(Math.random())]);
        adductorsArray.push(adduc[Math.floor(Math.random())]);
        hamstringsArray.push(hams[Math.floor(Math.random())]);
        glutesArray.push(glut[Math.floor(Math.random())]);
        latsArray.push(lat[Math.floor(Math.random())]);

        ADay = {
          chest: chestArray,
          shoulder: randomElements(trapsArray),
          triceps: tricepsArray,
        }

        BDay = {
          back: [...lowerBackArray, ...middleBackArray],
          biceps: bicepsArray,
          shoulder: randomElements(trapsArray),
        }

        CDay = {
          quadrieps: quadricepsArray,
          abductors: abductorsArray,
          adductors: adductorsArray,
          hamstrings: hamstringsArray,
          glutes: glutesArray,
        }

        const serie = {
          ADay,
          BDay,
          CDay,
        }

        setLoading(false);

        console.log(serie);

        return serie;
      }

      if (selectedDifficulty === 'Expert') {

      }

    } else {
      let DDay = {}
      let EDay = {}
    }
  }

  return (
    <Container>
      <Title>My Gym Series</Title>

      <RNButton title="Click me motherfucker" onPress={ async () => {
        api.get('/exercise', { headers: {
          'authorization': 'Bearer ' + await getToken()
        }})
        }}/>
    
      <Button onPress={async () => {
        const serie = await MountMySeries();
        console.log(serie);
        setSerie(serie as any);
      }}>
        <ButtonText>
          { loading ? <ActivityIndicator /> : 'Monte Minha Série' }
        </ButtonText>
      </Button>
    </Container>
  )
}