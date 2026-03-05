import { IconAppWindow, IconLetterCase, IconLock, IconMathGreater, IconNumber, IconRefreshAlert, IconSettings, IconShoppingCart, IconUsers, IconWindow } from "@tabler/icons-react";
import { MenuItem } from "../models/MenuItem";

export interface SecaoProps {
    titulo: string
    aberta: boolean
    itens: MenuItem[]
}

export const secoes = [
        {
            titulo: "Essenciais",
            aberta: true,
            itens: [
                { titulo: 'Contador', icone: <IconNumber />, url: '/essenciais/contador', tag: 'useState' },
                { titulo: 'Votação', icone: <IconUsers />, url: '/essenciais/votacao', tag: 'useState' },
                { titulo: 'Consulta Api', icone: <IconSettings />, url: '/essenciais/consultaAPI', tag: 'useEffect' },
                { titulo: 'Maior', icone: <IconMathGreater />, url: '/essenciais/maior', tag: 'useEffect' },
                { titulo: 'Contagem de caracteres', icone: <IconLetterCase />, url: '/essenciais/contagemCaracteres', tag: 'useEffect' },
                { titulo: 'State vs Ref', icone: <IconRefreshAlert />, url: '/essenciais/stateVsRef', tag: 'useRef' },
                { titulo: 'Ref Elemento', icone: <IconRefreshAlert />, url: '/essenciais/refElemento', tag: 'useRef' },
                { titulo: 'Contagem Caracteres useRef', icone: <IconRefreshAlert />, url: '/essenciais/contagemCaracteresUseRef', tag: 'useRef' },
            ],
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                { titulo: 'Modal', icone: <IconAppWindow />, url: '/personalizados/modal', tag: 'Personalizados' },
                { titulo: 'Tamanho da janela', icone: <IconWindow />, url: '/personalizados/tamanhoJanela', tag: 'Personalizados' },
                { titulo: 'Senha', icone: <IconLock />, url: '/personalizados/senha', tag: 'Personalizados' },
            ],
        },
        {
            titulo: "Contexto",
            aberta: true,
            itens: [
                { titulo: 'Loja', icone: <IconShoppingCart />, url: '/contexto/loja', tag: 'Context' },
            ],
        },
    ];