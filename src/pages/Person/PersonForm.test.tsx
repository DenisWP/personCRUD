import {screen, render, fireEvent} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import PersonForm from "./PersonForm";
import apiPessoas from "../../services/api";

//jest.mock('apiPessoas')

const fakePerson = {
   // id: '',
    name: 'Denis Wilson Unitário',
    age: 31,
    cpf: '46839275000'
}

const Name = () => screen.getByText(/Nome completo/i)
const Age = () => screen.getByText(/Idade/i)
const Cpf = () => screen.getByText(/CPF/i)
const buttonProximo = () =>  screen.getByRole('button', {name: /Próximo/i})
const buttonVoltar = () => screen.getByRole('button', {name: /Voltar/i})

describe('<IndexForm/>', () => {

    beforeEach(() => {
        render(<MemoryRouter><PersonForm/></MemoryRouter>)
    })

    test.skip('Validate a person registration form', () =>{
        expect(Name()).toBeInTheDocument()
        expect(Age()).toBeInTheDocument()
        expect(Cpf()).toBeInTheDocument()
        expect(buttonProximo()).toBeInTheDocument()
        expect(buttonProximo()).toHaveAttribute('type', 'submit') //Validando o atributo.
        expect(buttonVoltar()).toBeInTheDocument()
    })

    test.skip('Validate function back', () => {
        const back = jest.fn()
        back('/pessoas')
        expect(back).toHaveBeenCalled()
    })

    test('Validade event onsubmit form', () => {
        //const testSubmit = jest.spyOn(PersonForm, 'onSubmit')
        expect(buttonProximo()).toBeTruthy();
        fireEvent.submit(buttonProximo());
        //expect(testSubmit).toHaveBeenCalledTimes(1)
        //expect(testSubmit).toHaveBeenCalledWith(fakePerson)
    })
})





