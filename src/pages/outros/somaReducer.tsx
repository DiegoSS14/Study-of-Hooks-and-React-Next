import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconPlus } from "@tabler/icons-react";
import { Reducer, useEffect, useReducer, useState } from "react";

function mudarDados(currentState: any, action: any) {
    switch(action.type) {
        case "ALTERA_N1":
            return{...currentState, n1:action.novoValor, validN1:action.novoValor > 0}
        case "ALTERA_N2":
            return{...currentState, n2:action.novoValor, validN2:action.novoValor > 0}
        case 'RESULTADO':
            let resultado = currentState.n1 + currentState.n2
            if(currentState.validN1 && currentState.validN2) {
                return{...currentState, resultado}
            } else return{...currentState, resultado: -999}
    }
}

export default function Soma() {
    const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudarDados, {
        n1: 0,
        n2: 0,
        validN1: false,
        validN2: false,
        resultado: 0,
    })

    return (
        <Pagina titulo="Soma" subtitulo="Criando soma com useReducer">
            <Display texto={`Digite os dois números para somá-los`}/>
            <Flex>
                <InputFormatado tipo="number" valor={dados.n1} onInput={e=> dispatchDados({ type: 'ALTERA_N1', novoValor: +e.target.value})} />
                <IconPlus size={40} className="ml-4"/>
                <InputFormatado tipo="number" valor={dados.n2} onInput={e => dispatchDados({type: 'ALTERA_N2', novoValor: +e.target.value})} />
                <Botao icone={<IconPlus />} className="ml-3" onClick={()=>dispatchDados({type: 'RESULTADO'})}/>
            </Flex>
            <Display texto={dados.resultado}/>
        </Pagina>)
}