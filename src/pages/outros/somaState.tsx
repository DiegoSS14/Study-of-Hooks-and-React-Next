import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Soma() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [validN1, setValidN1] = useState(false)
    const [validN2, setValidN2] = useState(false)

    const [resultado, setResultado] = useState(0)

    useEffect(() => {
        setValidN1(n1 > 0)
    }, [n1])

    useEffect(() => {
        setValidN2(n2 > 0)
    }, [n2])

    function somar() {
        if(validN1 && validN2) {
            setResultado(n1+n2)
        } else setResultado(-999)
    }

    return (
        <Pagina titulo="Soma" subtitulo="Criando soma com useReducer">
            <Display texto={`Digite os dois números para somá-los`}/>
            <Flex gap={1}>
                <InputFormatado tipo="number" valor={n1} onInput={e => setN1(+e.target.value)} />
                <IconPlus size={40} className="ml-4"/>
                <InputFormatado tipo="number" valor={n2} onInput={e => setN2(+e.target.value)} />
                <Botao icone={<IconPlus />} onClick={somar} className="ml-3"/>
            </Flex>
            <Display texto={resultado}/>
        </Pagina>)
}