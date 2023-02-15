import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ButtonComponent } from "../../components/Button/Button";
import api from "../../utils/api";

export function DashBoard() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <StatusBar translucent/>
      <Text>Fitness Center</Text>

      <ButtonComponent
        title="Montar a sua série"
        mt={20}
        bRadius={20}
        onPress={async () => {
          // const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', { headers: {'X-Api-key': 'ulZm8Uqc0oa8GsEVSXS6Eg==OKWFsibXkKvrqO8S'}});
          // console.log(response.data);
          const response = await api.get('/exercise');
          console.log(response.data);
        }}
      />
    </View>
  )
}