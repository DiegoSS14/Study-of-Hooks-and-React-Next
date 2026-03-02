import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import UseStateValidado from "@/data/hooks/useStateValidado";
import { useState } from "react";

export default function Senha() {
    function validar(senha: string) {
        let correspondencia = senha.match(/[\d\S]{8,}/) // Regex de validação de senha, não recomendado para produção pois valida poucas coisas
        return correspondencia?.[0].length === senha.length // ?. isso se chama encadeamento condicional - Significa que só acontecerá caso a informação esteja presente
    }

    const [senha, setSenha, senhaValida] = UseStateValidado(validar)

    // Variável que armazena o valor da borda
    let borda

    // Validação da borda
    if(senhaValida) {
        borda = 'outline-green-600'
    } else if(senha === '') {
        borda = 'outline-none'
    } else {
        borda = 'outline-red-600'
    }

    return(
        <Pagina titulo="Senha" subtitulo="Utilizando state personalizado para validar uma senha">
            <InputFormatado
                label="Digite a sua senha"
                valor={senha}
                tipo="text"
                onInput={e=>setSenha(e.target.value)}
                className={`outline outline-2 ${borda}`}
            />
        </Pagina>
    )
}