import { useEffect, useState } from "react"


export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

    const handleWindowSizeChange = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    return screenWidth
}
