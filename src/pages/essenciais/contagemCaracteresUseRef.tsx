import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useRef, useState } from "react";

export default function ContagemCaracteresUseRef() {
    const limite = 100
    const [caracteresRestantes, setResto] = useState(limite)

    const refTexto = useRef<any>()
    const contador = useRef<any>()

    function iniciaContador() {
        clearTimeout(contador.current)
        contador.current = setTimeout(() => {
            let quantidadeCaracteresDigitados = refTexto.current.value.length
            setResto(limite - quantidadeCaracteresDigitados)
        }, 1000)
    }

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Usando um useRef para controlar o tempo">
            <Display
                texto={`Texto de até ${limite} caracteres`}
                textoComplementar={`Restam ${caracteresRestantes} caracteres`}
            />
            <textarea
                ref={refTexto}
                name="Digite o seu texto..."
                className="w-full max-w-lg bg-zinc-800 border-zinc-400 text-white p-5 rounded-md"
                onInput={iniciaContador}
            />
        </Pagina>
    )
}