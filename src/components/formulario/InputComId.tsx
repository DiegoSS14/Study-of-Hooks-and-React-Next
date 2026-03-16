import { useId } from "react";

interface InputFormatadoProps {
    label?: string;
    tipo: string;
    valor: string | number;
    onInput?: (e: any) => any;
    className?: string
}

export default function InputComId(props: InputFormatadoProps) {
    const id = useId()

    return (
        <>
            <label htmlFor={'id.'+id} className="m-1">{props.label}</label>
            <input
                id={id}
                type={props.tipo}
                value={props.valor}
                onInput={props.onInput}
                className={`
                    text-gray-600 px-2 
                    w-40 h-11 rounded-md
                    ${props.className ?? ''}
                `}
            />
        </>
    );
}
