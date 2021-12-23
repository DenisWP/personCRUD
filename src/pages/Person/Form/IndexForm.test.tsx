import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom"
import IndexForm from "./IndexForm";

const fakPerson = {
    name: 'Denis Fake Name',
    age: '31',
    cpf: '111.111.111-00'
}

const Name = () => screen.getByLabelText(/Nome completo/i)
const Age = () => screen.getByLabelText(/Idade/i)
const Cpf = () => screen.getByLabelText(/CPF/i)
const getButtonProximo = () => screen.getByRole('button', {name: /Proximo/i})
const getButtonVoltar = () => screen.getByRole('button', {name: /Voltar/i})

describe('<IndexForm/>', () => {
    test('Validar os inputs do formulário de cadastro de uma pessoa', () =>{
        render(<IndexForm/>)
    })
    expect(Name()).toBeInTheDocument()
    expect(Age()).toBeInTheDocument()
    expect(Cpf()).toBeInTheDocument()
    expect(getButtonProximo()).toBeInTheDocument()
    expect(getButtonVoltar()).toBeInTheDocument()
})