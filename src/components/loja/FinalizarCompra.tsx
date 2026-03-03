import { IconCheck } from "@tabler/icons-react";
import Botao from "../template/Botao";
import Janela from "../template/Janela";
import { useContext, useEffect, useState } from "react";
import { Contexto } from "@/pages/contexto/loja";

export default function FinalizarCompra() {
    const { carrinho } = useContext(Contexto)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        calculateTotalCart()
    }, [carrinho])
    
    function calculateTotalCart() {
        if(!carrinho || carrinho.length === 0) {
            setTotal(0)
        }
        const total = carrinho.reduce((acc, prod) => acc + (prod.preco * prod.quantidade), 0)
        setTotal(total)
    }


    function finalizar() {
        window.alert("Compra realizada com sucesso!");
    }

    return (
        <Janela titulo="Finalizar" cor="bg-red-600" vertical>
            <span className="text-2xl text-center">
                Total: <strong>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
            </span>

            <Botao
                cor="bg-white text-red-600"
                icone={<IconCheck />}
                texto="Finalizar"
                onClick={finalizar}
            />
        </Janela>
    );
}
