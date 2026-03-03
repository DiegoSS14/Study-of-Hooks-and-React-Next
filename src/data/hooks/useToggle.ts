import { useState } from "react"

export default function useToggle(value?: boolean) {
    const [toggle, setToggle] = useState(value ?? false)
    
    function activeToggle() {
        setToggle(!toggle)
    }

    function ativoTrue() {
        setToggle(true)
    }

    function ativoFalse() {
        setToggle(false)
    }

    const r: [boolean, () => void, () => void, () => void] = [toggle, activeToggle, ativoTrue, ativoFalse]

    return r
}