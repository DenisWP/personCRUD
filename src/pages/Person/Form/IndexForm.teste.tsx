import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom"
import IndexForm from "./IndexForm";

const fakPerson = {
    name: 'Denis Fake Name',
    age: '31',
    cpf: '111.111.111-00'
}

const getName = () => screen.getByTestId('namePerson')
const getAge = () => screen.getByTestId('agePerson')
const getCpf = () => screen.getByTestId('cpfPerson')

describe('<IndexForm/>', () => {
    test('Validar os inputs do formulário de cadastro de uma pessoa', () =>{
        render(<IndexForm/>)
    })
})