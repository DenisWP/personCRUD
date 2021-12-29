import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom"
import IndexForm from "./PersonForm";

const Name = () => screen.getByText(/Nome completo/i)
const Age = () => screen.getByText(/Idade/i)
const Cpf = () => screen.getByText(/CPF/i)
const buttonProximo = () => screen.getByRole('button', {name: /Próximo/i})
const buttonVoltar = () => screen.getByRole('button', {name: /Voltar/i})


describe('<IndexForm/>', () => {
    test('Validar formulário de cadastro de uma pessoa', () =>{
        render(<MemoryRouter><IndexForm/></MemoryRouter>)

        expect(Name()).toBeInTheDocument()
        expect(Age()).toBeInTheDocument()
        expect(Cpf()).toBeInTheDocument()
        expect(buttonProximo()).toBeInTheDocument()
        expect(buttonVoltar()).toBeInTheDocument()
    })
})

describe('Function Back', () => {
    test('Validação da Funçao back', () => {
        render(<MemoryRouter><IndexForm/></MemoryRouter>)

        userEvent.click(buttonVoltar())
    })
})
