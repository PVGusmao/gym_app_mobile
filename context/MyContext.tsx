import { createContext, useState } from 'react';

export type IMyContext = {
  name: string;
  setName:React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [name, setName] = useState<string>('Paulo');

  return (
    <MyContext.Provider value={{
      name, setName,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}