import { createContext, useEffect, useState } from "react";
import { SecaoProps, secoes as SecoesFixas } from "../constants/SecoesMenu";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import useToggle from "../hooks/useToggle";
import { useRouter } from "next/router";

interface MenuContextProps {
    secoes: SecaoProps[]
    mini: boolean
    toggleMini: () => void
    alternarSecao: (secalSelecionada:SecaoProps) => void
}

export const MenuContext = createContext({} as MenuContextProps)

export default function MenuProvider(props: any) {
    const [ mini, toggleMini, ativoTrue, ativoFalse ] = useToggle();
    const tamanho = useTamanhoJanela()
    const [ secoes, setSecoes ] = useState<SecaoProps[]>(SecoesFixas)

    const router = useRouter();
    
    
    useEffect(() => {
        if (tamanho === 'sm' || tamanho === 'md' || tamanho === 'xsm') {
            // setar o mini para false
            ativoTrue()
        } else ativoFalse()
    }, [tamanho])

    useEffect(()=>{
        setSecoes(selecionarItem(router.asPath))
    },[router.asPath])

    function alternarSecao(novaSecao: SecaoProps) {
        let novasSecoes = secoes.map(secao=>{
            if(secao.titulo === novaSecao.titulo) {
                return {...secao, aberta: !secao.aberta}
            } else return secao
        })
        setSecoes(() => novasSecoes)
    }

    function selecionarItem(url: string) {
        let secoesAtt = secoes.map(secao=> ({
            ...secao,
            itens: secao.itens.map(item=>({
                ...item,
                selecionado: item.url === url
            }))
        }))
        return secoesAtt
    }

    const ctx = { secoes, mini, toggleMini, alternarSecao }

    return (
        <MenuContext.Provider value={ctx}>
            {props.children}
        </MenuContext.Provider>
    )
}