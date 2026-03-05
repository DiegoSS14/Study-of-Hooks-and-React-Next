import { createContext, useEffect } from "react";
import { SecaoProps, secoes } from "../constants/SecoesMenu";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import useToggle from "../hooks/useToggle";

interface MenuContextProps {
    secoes: SecaoProps[]
    mini: boolean
    toggleMini: () => void
}

export const MenuContext = createContext({} as MenuContextProps)

export default function MenuProvider(props: any) {
    const [mini, toggleMini, ativoTrue, ativoFalse] = useToggle();
    const tamanho = useTamanhoJanela()

    useEffect(() => {
        if (tamanho === 'sm' || tamanho === 'md' || tamanho === 'xsm') {
            // setar o mini para false
            ativoTrue()
        } else ativoFalse()
    }, [tamanho])

    const ctx = { secoes, mini, toggleMini }

    return (
        <MenuContext.Provider value={ctx}>
            {props.children}
        </MenuContext.Provider>
    )
}