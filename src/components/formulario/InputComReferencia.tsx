import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputComReferenciaProps {
    label?: string;
    tipo: string;
    onInput?: (e: any) => any;
    className?: string
}

function InputComReferencia(props: InputComReferenciaProps, ref: any) {
    const referenciaInterna = useRef<any>()

    function novasFuncoes() {
        return({
            apagar: ()=>{
                referenciaInterna.current.value = referenciaInterna.current.value.slice(0, -1)
            },
            padrao: ()=>{
                referenciaInterna.current.value = 'Padrão definido!'
            }
        })
    }

    useImperativeHandle(ref, novasFuncoes, [])

    return (
        <>
            <label className="m-1">{props.label}</label>
            <input
                ref={referenciaInterna}
                type={props.tipo}
                className={`
                    text-gray-600 px-2
                    w-40 h-11 rounded-md
                    ${props.className ?? ''}
                `}
            />
        </>
    );
}

export default forwardRef(InputComReferencia)
