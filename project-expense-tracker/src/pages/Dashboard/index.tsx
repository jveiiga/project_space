import   Router  from "next/router";
import React from "react";
import { Button } from "../../components/atoms/Button/Button";
import { TemplateContainer } from "../../components/templates";
import { Card } from "./components/Card";

export const Dashboard = () => {
    const array = [
        { id: '0', title: 'netflix', category: 'streaming', cost: 39.99 },
        { id: '1', title: 'amazon', category: 'streaming', cost: 9.99 },
        { id: '2', title: 'spotify', category: 'streaming', cost: 19.99 },
        { id: '3', title: 'youtube premiun', category: 'streaming', cost: 29.99 },
    ];
    
    const handleNavigateToAddNewExpanse = () => {
        Router.push('/dashboard/add')
    };

    return <TemplateContainer>
            <header className="w-full max-w-screen-lg flex justify-between h-1/6 items-center">
                <span className="font-bold text-2xl">Expense Tracker</span>
                <nav className="flex gap-4">
                    <Button onClick={handleNavigateToAddNewExpanse}>Adicionnar nova conta</Button> 
                    <Button variant='ghost'>Sair</Button>
                </nav>
            </header>
            <main className="bg-purple-50 w-full max-w-screen-lg  grid overflow-y-scroll content-start grid-cols-3 gap-4 p-4">
                {array?.map((item) => (
                     <Card key={item.id} title={item.title} category={item.category} cost={item.cost} /> 
                ))}  
            </main>
            </TemplateContainer>
};