import { Button, Text, View } from "react-native";
import api from "../../utils/api";

export function DashBoard() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Fitness Center</Text>
      <Button title="Click me" onPress={async () => {
        try{
          const response = await api.get('/v2/workout/', {
            headers: {
              "Content-Type": 'application/json',
              "Authorization": 'Token 4d7ca4a07b492e37db7b8d21caa45888c8c9f265'
            }
          });

          console.log(response.data);
        } catch(err) {
          console.log(err?.response?.data);
        }
      }}/>
    </View>
  )
}