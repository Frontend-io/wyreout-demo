import { useEffect } from "react"
import IPage from "./types"


const Page = ({children, title}:IPage)=> {

    useEffect(()=> {
        document.title = title
    },[title])

    return children
}

export default Page