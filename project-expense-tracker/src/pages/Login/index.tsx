import Link from 'next/link'
import React, { Children } from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText/InputText'
import { ImageSideBar } from '../../components/organism/ImageSideBar'
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from '../../components/templates'


export const Login = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <ImageSideBar />
                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Acesse sua conta</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                        <InputText label="email" type="email"/>
                        <InputText label="senha" type="password"/>
                        <Button>Entrar</Button>
                    </form>
                    <Link href='/register'>Criar conta</Link>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    );
};
