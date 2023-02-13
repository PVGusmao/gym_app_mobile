import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";


export function DashBoard() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <StatusBar translucent/>
      <Text>Fitness Center</Text>
      {/* <BackgroundVideo /> */}
    </View>
  )
}