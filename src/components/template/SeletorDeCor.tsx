import { IconPaint, IconX } from "@tabler/icons-react"
import Flex from "./Flex"
import useToggle from "@/data/hooks/useToggle"
import useTema from "@/data/hooks/useTema"

export default function SeletorDeCor() {
    const { cores, setCorTema } = useTema()
    const [paint, togglePaint] = useToggle()

    let renderCores = cores.map(cor => (
        <div 
        key={cor} 
        className={`w-9 h-9 rounded-md bg-${cor} cursor-pointer`}
        onClick={() => setCorTema(cor)}
        ></div>
    ))

    return (
        <Flex gap={4} center className="absolute right-4 top-4">
            {paint && <Flex gap={2} center>{renderCores}</Flex>}
            <div className="cursor-pointer">
                {!paint ? <IconPaint size={30} onClick={togglePaint} /> : <IconX size={30} onClick={togglePaint} />}
            </div>
        </Flex>
    )
}