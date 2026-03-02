import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";
import {IconMinus, IconPlus, IconTextDecrease} from '@tabler/icons-react'

export default function Contador() {
    const [count, setCount] = useState(0)

    return(<Pagina>
        <Display texto={count}/>
        <Flex>
            <Botao
                icone={<IconMinus size={40}/>}
                cor="bg-blue-600"
                onClick={() => setCount(count-1)}
                />
            <Botao
                texto="0"
                cor="bg-red-600"
                onClick={() => setCount(0)}
                />
            <Botao
                icone={<IconPlus size={40}/>}
                cor="bg-blue-600"
                onClick={() => setCount(count+1)}
            />
        </Flex>
    </Pagina>)
}