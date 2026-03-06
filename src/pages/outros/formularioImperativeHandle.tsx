import InputComReferencia from "@/components/formulario/InputComReferencia";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function() {
    const referencia = useRef<any>()

    function apagar() {
        referencia.current.apagar()
    }

    function padrao() {
        referencia.current.padrao()
    }

    return(
        <Pagina titulo="Modificando uma referência" subtitulo="Usando useRef e useImperativeHandle para modificar uma referência">
                <Flex col>
                    <InputComReferencia tipo="string" label="Digite o texto" ref={referencia} />
                    <Flex>
                        <Botao texto="Apagar" onClick={apagar}/>
                        <Botao texto="Padrão" onClick={padrao}/>
                    </Flex>
                </Flex>
        </Pagina>
    )
}