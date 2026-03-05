import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";
import {IconMinus, IconPlus, IconTextDecrease} from '@tabler/icons-react'
import useTema from "@/data/hooks/useTema";

export default function Contador() {
    const { corTema } = useTema()
    const [count, setCount] = useState(0)

    return(<Pagina>
        <Display texto={count}/>
        <Flex>
            <Botao
                icone={<IconMinus size={40}/>}
                cor={`bg-${corTema}`}
                onClick={() => setCount(count-1)}
                />
            <Botao
                texto="0"
                cor="bg-red-600"
                onClick={() => setCount(0)}
                />
            <Botao
                icone={<IconPlus size={40}/>}
                cor={`bg-${corTema}`}
                onClick={() => setCount(count+1)}
            />
        </Flex>
    </Pagina>)
}