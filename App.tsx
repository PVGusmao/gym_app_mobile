import { MyProvider } from './context/MyContext';
import { Principal } from './screens/Principal/Princial';

export default function App() {
  return (
    <MyProvider>
      <Principal />
    </MyProvider>
  );
}
