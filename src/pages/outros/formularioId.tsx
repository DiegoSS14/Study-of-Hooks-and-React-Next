import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function() {
    // O Hook useId serve para melhorar o SEO e também para referênciar um label com seu input, por exemplo.
    const id = useId()

    return(<Pagina titulo="Conhecendo hook useId" subtitulo="Usando useId em um formulário">
        <Flex col gap={2}>
            <label htmlFor={`nome-${id}`}>Name</label>
            <input id={`nome-${id}`} className="p-2 rounded-lg" placeholder="Nome" type="text"/>
        </Flex>
        <Flex col gap={2}>
            <label htmlFor={`sobrenome-${id}`}>Sobrenome</label>
            <input id={`sobrenome-${id}`} className="p-2 rounded-lg" placeholder="Sobrenome" type="text"/>
        </Flex>
    </Pagina>)
}