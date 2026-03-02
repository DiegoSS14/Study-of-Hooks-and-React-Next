import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function ContagemCaracteres() {
    const limite = 100
    const [resto, setResto] = useState(limite)
    const [texto, setTexto] = useState('')

    function calcularResto() {
        setResto(limite - texto.length)
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            calcularResto()
            console.log('Renderizou')
        }, 2000)
        return () => clearTimeout(timer)
    }, [texto])

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Funções de limpeza">
            <Display
                texto={`Texto de até ${limite} caracteres`}
                textoComplementar={`Restam ${resto} caracteres`}
            />
            <textarea
                name="Digite o seu texto..."
                className="w-full max-w-lg bg-zinc-800 border-zinc-400 text-white p-5 rounded-md"
                onChange={(e) => setTexto(e.currentTarget.value)}
            />
        </Pagina>
    )
}