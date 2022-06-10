import { useEffect, useState } from "react"
import styled from "styled-components"

export const Numbers = () => {

    const Container = styled.div``
    const List = styled.ul`
       flex-wrap: wrap;
   `
    const ListItem = styled.li``
    const Title = styled.h3``
    const Paragraph = styled.p``
    const Destaque = styled.h2`
        font-size: 3em;
    `

    const [num, setNum] = useState(0)


    return (
        <Container>
            <List className="flex">
                
            </List>
        </Container>
    )
}