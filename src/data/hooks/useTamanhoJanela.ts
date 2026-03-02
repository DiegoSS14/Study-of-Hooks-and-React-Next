import { useEffect, useState } from "react";

function getTamanhoJanela() {
    if(typeof window != "undefined") {
        const {innerWidth: largura, innerHeight: altura} = window
        return {largura, altura}
    }
    return {largura: -1, altura: -1}
}

export default function useTamanhoJanela() {
    const [tamanhoJanela, setTamanhoJanela] = useState(getTamanhoJanela)

    useEffect(()=>{
        function tamanhoMudou() {
            setTamanhoJanela(getTamanhoJanela())
        }
        window.addEventListener("resize", tamanhoMudou)
        return () => {
            window.removeEventListener("resize", tamanhoMudou)
        }
    },[])

    function entre(min:number, max:number) {
        return (tamanhoJanela.largura >=min) && (tamanhoJanela.largura < max)
    }

    const dimensoes = {
        sm: entre(640, 768),
        md: entre(768, 1024),
        lg: entre(1024, 1280),
        xl: entre(1280, 1536),
        xl2: entre(1536, Number.MAX_VALUE),
    }

    // Tamanho verdadeiro filtra o índice 1 do elemento verdadeiro. ex: sm, [768, 1024]
    const tamanhoVerdadeiro = Object.entries(dimensoes)
        .filter(el => el[1])

    // Aqui você pega o elemento [0] do tamanho verdadeiro e pega a posição [0] dele também
    return tamanhoVerdadeiro[0]?.[0]
}