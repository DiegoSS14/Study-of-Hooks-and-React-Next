import { createContext, useState } from "react";

interface TemaContextProps {
    cores: string[]
    corTema: string
    setCorTema: (c:string) => void
}

export const TemaContext = createContext({} as TemaContextProps)

export default function TemaProvider(props: any) {
    const cores = ['blue-600', 'red-500', 'purple-600', 'green-500', 'yellow-600']
    const [corTema, setCorTema] = useState(cores[0])
    const ctx = {cores, corTema, setCorTema}

    return(
        <TemaContext.Provider value={ctx}>
            {props.children}
        </TemaContext.Provider>
    )
}