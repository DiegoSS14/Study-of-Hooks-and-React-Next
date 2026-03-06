import InputFormatado from "@/components/formulario/InputFormatado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useMemo, useState } from "react";

export default function () {
    const [number1, setNumber1] = useState(1)
    const [number2, setNumber2] = useState(2)
    const [number3, setNumber3] = useState(3)
    const [number4, setNumber4] = useState(4)

    // let potencia = number1 ** number2

    // Utilizando a função dessa maneira toda ao realizar qualquer operação esse mesmo processamento vai ser re-feito.
    // function potencia() {
    //     let future = Date.now() + 2000
    //     while(Date.now() < future){}
    //     return (number1 ** number2)
    // }

    // Ao fazer dessa forma a aplicação só vai realizar esse processamento quando as variáveis de dependência mudarem.
    const potencia = useMemo(() => {
        let future = Date.now() + 2000
        while (Date.now() < future) { }
        return (number1 ** number2)
    }, [number1, number2])

    let soma = number3 + number4

    return (
        <Pagina titulo="Memoização" subtitulo="Exemplo de memoização">
            <Flex col center>
                <Display texto={
                    <>
                        <span>{number1}</span>
                        <sup>{number2}</sup>
                        <span> = {potencia}</span>
                    </>
                } />
                <Flex>
                    <InputFormatado valor={number1} onInput={(e) => setNumber1(+e.target.value)} tipo="number" />
                    <InputFormatado valor={number2} onInput={(e) => setNumber2(+e.target.value)} tipo="number" />
                </Flex>

                <Display texto={`${number3} + ${number4} = ${soma}`} />
                <Flex>
                    <InputFormatado valor={number3} onInput={(e) => setNumber3(+e.target.value)} tipo="number" />
                    <InputFormatado valor={number4} onInput={(e) => setNumber4(+e.target.value)} tipo="number" />
                </Flex>
            </Flex>
        </Pagina>
    )
}