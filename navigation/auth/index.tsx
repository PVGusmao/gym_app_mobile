import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../../screens/Login/Login";
import { Register } from "../../screens/Register/Register";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export function NavStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  )
}