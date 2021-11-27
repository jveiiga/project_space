import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {
    if(variant === 'ghost') return (
        <GhostButton {...props}>
            {children}
        </GhostButton>
    )
    return (
        <MainButton
            { ...props}
            >
            {children}
        </MainButton>
    );
};

export const BaseButton = tw.button`
     h-10 text-white font-bold  rounded cursor-not-allowed disabled:bg-gray-200 px-8
`

export const MainButton = tw(BaseButton)`
bg-purple-500 hover:bg-purple-400
`

export const GhostButton = tw(BaseButton)`
    bg-transparent hover:bg-gray-50 text-purple-500 hover:bg-purple-200
`