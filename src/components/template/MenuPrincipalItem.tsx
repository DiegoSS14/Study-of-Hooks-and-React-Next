import useTema from "@/data/hooks/useTema";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini } = props;
    const { corTema } = useTema()

    const router = useRouter();
    const ativo = url === router.asPath;

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2 rounded-md
            hover:bg-zinc-800 px-3 py-2
            ${ativo && `text-${corTema} bg-zinc-900`}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${ativo ? `bg-${corTema}` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
