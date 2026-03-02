import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function () {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementReference() {
        referencia.current = referencia.current + 1
        console.log(referencia.current)
    }

    return (
        <Pagina titulo="UseState vs UseRef" subtitulo="Na prática a diferença entre o useRef para o useState é que o useRef não gera renderizações na tela, ele serve apenas para armazenar valores que podem fazer parte da lógica da aplicação">
            {/* Não é uma boa prática exibir o useRef na tela como estamos fazendo agora */}
            <Display texto={`State: ${estado} | Ref: ${referencia.current}`} />
            <Flex>
                <Botao
                    texto="St"
                    cor="bg-blue-600"
                    redondo
                    onClick={() => setEstado(estado + 1)}
                />
                <Botao
                    texto="Rf"
                    cor="bg-purple-600"
                    redondo
                    onClick={incrementReference}
                />
            </Flex>
        </Pagina>
    )
}