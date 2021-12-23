import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import Person from "./Person";
import {useNavigate} from "react-router-dom";
import userEvent from "@testing-library/user-event";


const getVoltarButton = () => screen.getByRole('button', {name: /Voltar/i})
const getNovaPessoa = () => screen.getByRole('button', {name: /Nova Pessoa/i})
//const mockNavigateCadPessoa = jest.fn()

const navigate = require('react-router-dom')
const mockNavigateCadPessoa = new navigate.Navigate({})


//Mocks do navigation
jest.mock('react-router-dom', () => ({
     mockNavigateCadPessoa: jest.fn()
}))

describe('Verificar os botões "Nova Pessoa" e "Voltar" estão presentes no componente', () => {

    test('Verificar se ao clicar no botão "Nova Pessoa" irá direcionar para a tela de cadastro', () => {
        render(<Person/>)
        userEvent.click(getNovaPessoa())
        expect(mockNavigateCadPessoa).toHaveBeenCalledTimes(1)
        expect(mockNavigateCadPessoa).toHaveBeenCalledWith('/pessoas_cadastro')
    })


    {/*Testes simples para validar se os botoes estao sendo apresentados*/}
    test('Verificnado a exibição do botão Voltar', () => {
        render(<Person/>)
        expect(getVoltarButton()).toBeInTheDocument()
    })

    test('Verificnado a exibição do botão nova pessoa', () => {
        render(<Person/>)
        expect(getNovaPessoa()).toBeInTheDocument()
    })

})