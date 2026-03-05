import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useTema from "@/data/hooks/useTema";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function () {
    const referencia = useRef<any>()
    const { corTema } = useTema()

    console.log('Renderizei')

    function deleteChar() {
        // referencia.current = <p>
        referencia.current.innerText = referencia.current.innerText.slice(0, -1)
    }

    return (
        <Pagina titulo="Refernciando um elemento" subtitulo="Usando referências na DOM">
            <Flex col center>
                <p ref={referencia} className="text-4xl bg-zinc-700 h-20 flex items-center px-6 rounded-md">
                    Texto a ser manipulado
                </p>
                <Botao redondo icone={<IconArrowLeft/>} cor={`bg-${corTema}`} tamanho="2xl" onClick={() => deleteChar()}/>
            </Flex>
        </Pagina>
    )
}