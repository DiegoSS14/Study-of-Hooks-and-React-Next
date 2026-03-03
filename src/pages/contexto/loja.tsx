import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";
import { createContext } from "react";

interface CartContextProps {
    carrinho: any[]
    setCarrinho: ({}:any) => void
    total: number
}

export const Contexto = createContext({} as CartContextProps)

export default function Loja() {
    const [carrinho, setCarrinho] = useState<any[]>([])
    let total = carrinho.reduce((acc, produto) => acc + (+produto.preco), 0);
    const ctx: CartContextProps = { carrinho, setCarrinho, total}
    return (
        <Contexto.Provider value={ctx}>
            <Pagina titulo="Loja" subtitulo="Criando aplicação e distribuindo informações através de contexto">
                <Flex gap={4}>
                    <Flex col>
                        <AdicionarProduto />
                        <Carrinho />
                    </Flex>
                    <FinalizarCompra />
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}