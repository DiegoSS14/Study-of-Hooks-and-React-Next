import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function() {
    const [quantidade, setQuantidade] = useState(0)

    // Utilizando o useCallback o estado do componente é mantido, como não passei nada no array de dependências ele só será renderizado uma vez.
    const finalizar = useCallback(function(e:any) {
        e.preventDefault()
        // É possível observar que a minha quantidade renderizada na tela não muda, isso acontece porque o estado da função não mudou desde a primeira renderização. 
        // Então para ela a quanitdade vai ser sempre zero, portanto se precisar que o valor mude, o useCallback não é a abordagem recomendada nesse caso.
        window.alert(`Compra finalizada. Quantidade ${quantidade}`) 
        setQuantidade(0)
    }, [])

    return(
        <Pagina titulo="Memoizando funções" subtitulo="Exemplo de memoização utilizando o hook useCallback">
            <Display texto="Quantos produtos você quer?"/>
            <form>
                <Flex center>
                    <InputFormatado valor={quantidade} tipo="number" label="Quantidade" onInput={e=>{setQuantidade(+e.target.value)}}/>
                    <BotaoMemoizado texto="Confirmar" onClick={finalizar}/>
                </Flex>
            </form>
        </Pagina>
    )
}