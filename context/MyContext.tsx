import { createContext, useState } from 'react';

export type IMyContext = {
  token: string;
  validation: boolean;
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [token, setToken] = useState<string>('');
  const [validation, setValidation] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{
      token, setToken,
      validation, setValidation,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}