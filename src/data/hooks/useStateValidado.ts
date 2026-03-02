import { useState } from "react";

export default function UseStateValidado(funcaoValidacao:(e:any)=>boolean) {
    const [valor, setValor] = useState<any>()
    const [validado, setValidado] = useState<boolean>()

    function setValorValidado(novoValor: any) {
        setValor(novoValor)
        setValidado(funcaoValidacao(novoValor))
    }

    return [valor, setValorValidado, validado]
}