import { createContext, useState } from 'react';
import { ExercisesInterface } from '../screens/Home/Home';

export type IMyContext = {
  token: string;
  email: string;
  loading: boolean;
  exercises: ExercisesInterface[];
  validation: boolean;
  selectedObjective: string;
  selectedDifficulty: string;
  selectedStyle: string;
  selectedType: string;
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setSelectedStyle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedObjective: React.Dispatch<React.SetStateAction<string>>;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setExercises: React.Dispatch<React.SetStateAction<ExercisesInterface[]>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [token, setToken] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [exercises, setExercises] = useState<ExercisesInterface[]>([]);
  const [validation, setValidation] = useState<boolean>(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("None");
  const [selectedObjective, setSelectedObjective] = useState<string>("None");
  const [selectedType, setSelectedType] = useState<string>("None");
  const [selectedStyle, setSelectedStyle] = useState<string>("None");

  return (
    <MyContext.Provider value={{
      token, setToken,
      email, setEmail,
      validation, setValidation,
      exercises, setExercises,
      loading, setLoading,
      selectedDifficulty, setSelectedDifficulty,
      selectedObjective, setSelectedObjective,
      selectedType, setSelectedType,
      selectedStyle, setSelectedStyle,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}