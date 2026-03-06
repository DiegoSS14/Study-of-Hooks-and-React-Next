import useMenu from "@/data/hooks/useMenu";
import useTema from "@/data/hooks/useTema";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";

export interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
    selecionado?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini, selecionado } = props;
    const { corTema } = useTema()
    const {} = useMenu()

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2 rounded-md
            hover:bg-zinc-800 px-3 py-2
            ${selecionado && `text-${corTema} bg-zinc-900`}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${selecionado ? `bg-${corTema}` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
