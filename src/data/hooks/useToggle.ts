import { useState } from "react"

export default function useToggle(value?: boolean) {
    const [toggle, setToggle] = useState(value ?? false)
    
    function activeToggle() {
        setToggle(!toggle)
    }

    const r: [boolean, () => void] = [toggle, activeToggle] 

    return r
}