import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../../screens/Login/Login";

type RootStackParamList = {
  Login: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export function NavStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen options={{ headerShown: false }} name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  )
}