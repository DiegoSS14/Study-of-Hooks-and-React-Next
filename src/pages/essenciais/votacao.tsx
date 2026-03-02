import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao() {
    const [votos, setVotos] =  useState({votosRoxos: 0, votosVerdes: 0})

    function votarRoxo() {
        setVotos((votos) => {
            return {votosRoxos: votos.votosRoxos++, votosVerdes: votos.votosVerdes}
        })
    }

    function votarVerde() {
        setVotos((votos) => {
            return {...votos, votosVerdes: votos.votosVerdes++}
        })
    }

    function limpar() {
        setVotos({votosRoxos: 0, votosVerdes: 0})
    }

    return(
        <Pagina>
            <Display
                texto='Votação' 
                textoComplementar={`Votos roxos ${votos.votosRoxos} | Votos verdes ${votos.votosVerdes}`}
            />
            <Flex>
                <Botao 
                    redondo 
                    cor="bg-purple-600"
                    onClick={votarRoxo}
                />
                <Botao 
                    redondo 
                    cor="bg-green-500"
                    onClick={votarVerde}
                />
            </Flex>
            <Botao
                texto="Limpar"
                cor="bg-zinc-500"
                onClick={limpar}
            />
        </Pagina>
    )
}