import { useState } from "react"

function useHooksPersonalizado() {
    
    const [verduras,serVerduras] = useState([])

    return [verduras,serVerduras]
}

export default useHooksPersonalizado
