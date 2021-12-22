import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import {MemoryRouter} from "react-router-dom";
import Person from "./Person";

describe('Verificar os botões "Nova Pessoa" e "Voltar" estão presentes no componente', () => {
    test('Verificnado a exibição do botão Voltar', () => {
        render(
            <MemoryRouter>
                <Person/>
            </MemoryRouter>
        )
        const buttonVoltar = screen.getByRole('button', {name: /Voltar/i})
        expect(buttonVoltar).toBeInTheDocument()
    })

    test('Verificnado a exibição do botão nova pessoa', () => {
        render(
            <MemoryRouter>
                <Person/>
            </MemoryRouter>
        )
        const buttonNovaPessoa = screen.getByRole('button', {name: /Nova Pessoa/i})
        expect(buttonNovaPessoa).toBeInTheDocument()
    })

})