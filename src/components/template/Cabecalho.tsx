import Flex from "./Flex";
import SeletorDeCor from "./SeletorDeCor";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <SeletorDeCor/>
        </Flex>
    );
}
