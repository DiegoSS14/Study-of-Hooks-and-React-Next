import Botao from "@/components/template/Botao";
import Pagina from "@/components/template/Pagina";
import useTema from "@/data/hooks/useTema";
import { useEffect, useState } from "react";

export default function() {
    const [url, setUrl] = useState()
    const [action, setAction] = useState(0)
    const { corTema } = useTema()

    function loadImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => { return res.json() })
            .then((obj) => {
                console.log('Renderizou')
                setUrl(obj.message)
            })
    }

    useEffect(() => {
        loadImage()
    }, [])
    
    // Extra
    // Use Effect realizar a requisição novamente se o valor de 'action' mudar.
    useEffect(() => {
        if(action > 0) {
            loadImage()
        }
    }, [action])


    return(
        <Pagina>
            <img src={url} alt="Foto de cachorro" />
            <Botao cor={`bg-${corTema}`} texto="Renderizar novamente" onClick={() => {setAction(action+1)}}/>
        </Pagina>
    )
}