import React from "react"
import { Container } from "@chakra-ui/react"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

const WyreContainer = (props:any):ReactJSXElement=> (
    <Container px={{base:"1rem", md:"2rem", lg:"3rem"}} maxW={{base:"100%", md:"90%", lg:"1800px"}} {...props}>
        {props.children}
    </Container>
)

export default WyreContainer