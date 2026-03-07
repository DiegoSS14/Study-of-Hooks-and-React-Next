import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { useLayoutEffect, useRef, useState } from "react";

export default function () {
    const [cor, setCor] = useState<string>('')
    const [texto, setTexto] = useState<string>('Clique em sortear para definir a cor')
    const [mostrar, mostrarToggle, ativoTrue, ativoFalse] = useToggle()
    const ref = useRef<any>()


    // Daria para fazer dessa forma
    // function geraCorAleatoria() {
    //     let numeroAleatorioHexadecimal = Math.floor(Math.random()*0xffffff)
    //     const cor = numeroAleatorioHexadecimal.toString(16).padStart(6, '0')
    //     setCor(cor)
    // }

    // function limparCor() {
    //     setCor('')
    // }

    function geraCorAleatoria() {
        let numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff)
        const cor = numeroAleatorioHexadecimal.toString(16).padStart(6, '0')
        return '#' + cor
    }

    useLayoutEffect(() => {
        if (mostrar) {
            const corGerada = geraCorAleatoria()
            setTexto(corGerada)
            ref.current.style.backgroundColor = corGerada
        } else setTexto('Clique em sortear para definir a cor')
    }, [mostrar])

    return (
        <Pagina titulo="Gerador de cor" subtitulo="Criando exemplos mais complexos com useLayoutEffect">
            <Display texto={texto} />
            <Flex>
                <Botao texto="Sortear cor" onClick={ativoTrue} />
                <Botao texto="Apagar cor" onClick={ativoFalse} />
            </Flex>
            {/* Daria para fazer dessa forma */}
            {/* {cor && (<div className={`w-16 h-16 rounded-md mt-3`} style={{backgroundColor: `#${cor}`}}></div>)} */}

            {/* Forma utilizando o hook useRef */}
            {mostrar && (<div className={`w-16 h-16 rounded-md mt-3`} ref={ref}></div>)}
        </Pagina>
    )
}