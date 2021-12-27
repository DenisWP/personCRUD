import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom"
import {MemoryRouter} from "react-router-dom";
import IndexForm from "./IndexForm";

const fakPerson = {
    name: 'Denis Fake Name',
    age: '31',
    cpf: '111.111.111-00'
}

const Name = () => screen.getByText(/Nome completo/i)
const Age = () => screen.getByText(/Idade/i)
const Cpf = () => screen.getByText(/CPF/i)
const buttonProximo = () => screen.getByRole('button', {name: /Próximo/i})
const buttonVoltar = () => screen.getByRole('button', {name: /Voltar/i})

describe('<IndexForm/>', () => {
    test('Validar formulário de cadastro de uma pessoa', () =>{
        render(
            <MemoryRouter>
                <IndexForm/>
            </MemoryRouter>
        )
        expect(Name()).toBeInTheDocument()
        expect(Age()).toBeInTheDocument()
        expect(Cpf()).toBeInTheDocument()
        expect(buttonProximo()).toBeInTheDocument()
        expect(buttonVoltar()).toBeInTheDocument()
    })
})

describe()