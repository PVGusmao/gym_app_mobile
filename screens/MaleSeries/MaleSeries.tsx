import { useContext } from "react";

import { Button, ButtonText, Container, Title } from "./style";

import { Button as RNButton } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { IMyContext, MyContext } from "../../context/MyContext";

import { ActivityIndicator } from "react-native";
import { getToken } from "../../utils/api";
import axios from "axios";

export function MaleSeries() {
  const navigation = useNavigation();
  
  const { selectedDifficulty, selectedType, selectedStyle, selectedObjective,
    loading, setLoading } = useContext(MyContext) as IMyContext;
  
  return (
    <Container>
      <Title>My Gym Series</Title>

      <RNButton title="Click me motherfucker" onPress={ async () => {
        setLoading(true);
        console.log(selectedDifficulty);
        try {
          const data = await axios.post('http://10.0.0.22:3000/open-ai',
            {
              selectedDifficulty,
              selectedObjective,
              selectedStyle,
              selectedType,
            },
            { 
              headers:
                {
                  'authorization': 'Bearer ' + await getToken()
                }
            }
          )
          setLoading(false);
          console.log(data.data);
        } catch(err: any) {
          console.log(err.response.data.message);
          setLoading(false);
        }
        }}/>
    
      <Button onPress={async () => {
        // const serie = await MountMySeries();
        // console.log(serie);
        // setSerie(serie as any);
      }}>
        <ButtonText>
          { loading ? <ActivityIndicator /> : 'Monte Minha Série' }
        </ButtonText>
      </Button>
    </Container>
  )
}