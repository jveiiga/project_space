import React from 'react'
import tw from 'tailwind-styled-components'
import { Button } from '../../../../components/atoms/Button/Button'

export const Card = ({ title, category, cost }) => {
    
    return (
        <CardContainer>
            <TitleExpense>{title}</TitleExpense>
            <TitleCategory>{category}</ TitleCategory>
            <TextValue>{cost}</TextValue>
            <FooterButtons>
                <Button variant="ghost">Editar</Button>
                <Button variant="ghost">Excluir</Button>
            </FooterButtons>
        </CardContainer>
    )
}

export const CardContainer = tw.article`
bg-white rounded-md p-4 shadow-md h-40 relative flex justify-between flex-col gap-2
`
export const TitleExpense = tw.h2`
font-bold text-xl    
`
export const TitleCategory = tw.p`
h-8 flex justify-center items-center text-purple-900 bg-purple-100 rounded-md self-start
` 
export const TextValue = tw.p`
font-medium    
`
export const FooterButtons = tw.footer`
flex justify-between    
`


