import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyProvider } from './context/MyContext';

import useCachedResources from './hooks/useCachedResources';
import { NavStack } from './navigation/auth';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <MyProvider>
      <SafeAreaProvider>
        <NavStack />
        <StatusBar style='inverted'/>
      </SafeAreaProvider>
    </MyProvider>
    );
  }
}
