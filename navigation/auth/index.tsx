import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "..";

import { Login } from "../../screens/Login/Login";
import { Register } from "../../screens/Register/Register";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  Navigation: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export function NavStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Screen options={{ headerShown: false }} independent={true} name="Dashboard" component={Navigation} />
      </Navigator>
    </NavigationContainer>
  )
}