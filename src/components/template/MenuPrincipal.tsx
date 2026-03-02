import { IconAppWindow, IconComponents, IconFloatCenter, IconLetterCase, IconLock, IconMathGreater, IconMenu2, IconMoodAngry, IconNumber, IconRefreshAlert, IconSettings, IconUsers, IconWindow } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Flex from "./Flex";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [
                {titulo: 'Contador', icone: <IconNumber/>, url: '/essenciais/contador', tag: 'useState'},
                {titulo: 'Votação', icone: <IconUsers/>, url: '/essenciais/votacao', tag: 'useState'},
                {titulo: 'Consulta Api', icone: <IconSettings/>, url: '/essenciais/consultaAPI', tag: 'useEffect'},
                {titulo: 'Maior', icone: <IconMathGreater/>, url: '/essenciais/maior', tag: 'useEffect'},
                {titulo: 'Contagem de caracteres', icone: <IconLetterCase/>, url: '/essenciais/contagemCaracteres', tag: 'useEffect'},
                {titulo: 'State vs Ref', icone: <IconRefreshAlert/>, url: '/essenciais/stateVsRef', tag: 'useRef'},
                {titulo: 'Ref Elemento', icone: <IconRefreshAlert/>, url: '/essenciais/refElemento', tag: 'useRef'},
                {titulo: 'Contagem Caracteres useRef', icone: <IconRefreshAlert/>, url: '/essenciais/contagemCaracteresUseRef', tag: 'useRef'},
            ],
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                {titulo: 'Modal', icone: <IconAppWindow/>, url: '/personalizados/modal', tag: 'Personalizados'},
                {titulo: 'Tamanho da janela', icone: <IconWindow/>, url: '/personalizados/tamanhoJanela', tag: 'Personalizados'},
                {titulo: 'Senha', icone: <IconLock/>, url: '/personalizados/senha', tag: 'Personalizados'},
            ],
        },
    ];
    const mini = false;
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
