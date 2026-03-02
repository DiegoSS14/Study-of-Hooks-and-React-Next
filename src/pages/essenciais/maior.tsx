import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [maior, setMaior] = useState(0)

    function calcularMaior() {
        return n1 > n2 ? n1 : n2
    }

    useEffect(() => {
        setMaior(calcularMaior())
    }, [n1,n2])

    useEffect(() => {
        console.log('O novo número maior é ' + maior)
    }, [maior])

    useEffect(() => {
        if(maior == 10) {
            window.alert(`O número está ficando alto!`)
        }
        if(maior == 20) {
            window.alert('Disputa acirrada!')
        }
    }, [maior])

    return (
        <Pagina>
            <Display
                texto={`N1: ${n1} | N2: ${n2}`}
                textoComplementar={`O número maior é ${maior}`}
            />
            <Flex>
                <Botao
                    cor="bg-blue-600"
                    texto="n1"
                    redondo
                    onClick={() => setN1(n1+1)}
                />
                <Botao
                    cor="bg-purple-700"
                    texto="n2"
                    redondo
                    onClick={() => setN2(n2+1)}
                />
            </Flex>
        </Pagina>
    )
}