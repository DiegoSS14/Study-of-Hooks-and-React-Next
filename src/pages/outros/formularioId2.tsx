import InputComId from "@/components/formulario/InputComId";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId, useState } from "react";

export default function() {
    // O Hook useId serve para melhorar o SEO e também para referênciar um label com seu input, por exemplo.
    const id = useId()
    const [nome, setNome] = useState('')
    const [sobreNome, setSobreNome] = useState('')

    return(<Pagina titulo="Conhecendo hook useId" subtitulo="Usando useId em um formulário">
        <InputComId tipo="string" label="Nome" valor={nome} onInput={e=>setNome(e.target.value)}></InputComId>
        <InputComId tipo="string" label="Sobrenome" valor={sobreNome} onInput={e=>setSobreNome(e.target.value)}></InputComId>
    </Pagina>)
}