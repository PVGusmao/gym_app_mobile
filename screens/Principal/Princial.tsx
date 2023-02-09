import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import { Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IMyContext, MyContext } from "../../context/MyContext";
import useCachedResources from "../../hooks/useCachedResources";
import Navigation from "../../navigation";
import { NavStack } from "../../navigation/auth";
import api from "../../utils/api";

export function Principal() {
  const isLoadingComplete = useCachedResources();
  const { validation, setValidation } = useContext(MyContext) as IMyContext;

  async function validateToken() {
    try {
      const response = await api.get('login');
      console.log(response.data);
      setValidation(response as any);
    } catch(err) {
      console.log(err?.response?.data);
    }
  }
  
  useEffect(() => {
    validateToken();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {!validation ? <NavStack /> : <Navigation colorScheme={"light"} />}
        <StatusBar style='inverted'/>
      </SafeAreaProvider>
    );
  }
}