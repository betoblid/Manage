//hook novo ele escuta o tamanho da tela com a function matchmedia, em tempo real sem precisar dar o reload
import { useEffect, useState } from "react"
export const userMediaQuery = (queryValue: string) => {
    //statos para controlar o resultado
    const [match, setMatch] = useState(false)
    //a function que será chamada
    useEffect(() => {
        //variavel de controle
        let isMounted = true
        const MediaQuery = window.matchMedia(queryValue)
        //verificar se a media mudou
        const HandleChangeMedia = () => {
            //verificar se já existe uma function em andamento
            if (!isMounted) { return }
            //se não tiver peguei o resultado
            setMatch(MediaQuery.matches)
        }
        //adicionando a escuta na function
        MediaQuery.addEventListener("change", HandleChangeMedia)
        setMatch(!!MediaQuery.matches)

        return () => {
            isMounted = false
            //removendo a escuta
            MediaQuery.removeEventListener("change", HandleChangeMedia)
        }
    }, [queryValue])
    //retornando o resultado
    return match

}