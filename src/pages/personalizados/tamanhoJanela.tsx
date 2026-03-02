import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "../../data/hooks/useTamanhoJanela";
import Display from "@/components/template/Display";

export default function TamanhoJanela() {
    const tamanho = useTamanhoJanela()

    return (
        <Pagina titulo="Tamanho da Janela" subtitulo="usando um hook personalizado para descobrir o tamanho da página">
            <div className={`
                flex items-center justify-center
                w-32 h-32
                sm:bg-zinc-400
                md:bg-green-400
                lg:bg-blue-600
                xl:bg-yellow-400
                xl:bg-orange-600
            `}>
                <Display texto={tamanho} />
            </div>
        </Pagina>
    )
}