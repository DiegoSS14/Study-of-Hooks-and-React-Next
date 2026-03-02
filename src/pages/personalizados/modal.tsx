import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

export default function () {
    const [modal, toggleModal] = useToggle()
    return (
        <Pagina titulo="Modal" subtitulo="Usando hook personalizado para abrir e fechar um modal">
            <Botao texto={!modal ? `Abrir` : `Fechar`} cor={!modal ? `bg-blue-600` : `bg-red-600`} onClick={toggleModal} />
            {modal && (
                <Flex col center className="w-full max-w-lg h-full max-h-24 bg-zinc-700 rounded-md outline outline-1 outline-zinc-600">
                    <h1>Lista de itens que você pode adicionar...</h1>
                </Flex>)
            }
        </Pagina>
    )
}