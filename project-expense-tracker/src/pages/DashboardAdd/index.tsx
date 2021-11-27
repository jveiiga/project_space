import Link from 'next/link'
import React, { Children } from 'react'
import { Button } from '../../components/atoms/Button/Button'
import { InputText } from '../../components/molecules/InputText'
import { ImageSideBar } from '../../components/organism/ImageSideBar'
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from '../../components/templates'


export const DashboardAdd = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                {/* <ImageSideBar /> */}
                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Cadastro de nova despesa</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                        <InputText label="Despesa" placeholder="ex: netflix" type="text"/>
                        <InputText label="Categoria" placeholder="ex: streaming" type="text"/>
                        <InputText label="Valor" type="number"/>
                        <Button>Cadastrar</Button>
                    </form>
                    <Link href='/dashboard'>Voltar</Link>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    );
};
