import { createContext } from "react";
import { ACCOUNT_NUMBER } from "src/constants";

interface GlobalContent {
  accountNumber: string;
}

interface ProviderProps {
  children?: React.ReactNode;
  rootNode?: React.ReactNode
}

export const GlobalContext = createContext<GlobalContent>({
  accountNumber: ACCOUNT_NUMBER
})

export function GlobalProvider(props: ProviderProps) {
  return <GlobalContext.Provider value={{ accountNumber: ACCOUNT_NUMBER }}>
    {props.children}
  </GlobalContext.Provider>

}