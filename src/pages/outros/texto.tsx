import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useLayoutEffect, useState } from "react";

export default function() {
    const [texto, setTexto] = useState('Texto secreto!!!!!!')

    // O useEffect escreve todas as informações gerais na tela primeiro (Como um rascunho) e depois corrige o que tem que ser corrigido.
    // O useLayoutEffect corrige o que tem de ser corrigido e só depois escreve as informações na tela.
    useLayoutEffect(()=>{
        setTexto('texto diferente...')
    }, [])

    return(
        <Pagina titulo="Texto secreto" subtitulo="Entendendo o problema do useEffect">
            <Flex>
                <p>{texto}</p>
            </Flex>
        </Pagina>
    )
}