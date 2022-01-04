import {screen, render, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom"
import PersonForm from "./PersonForm";

const fakePerson = {
    name: 'Denis Wilson',
    age: 31,
    cpf: "46839275000",
}

const Name = () => screen.getByText(/Nome completo/i)
const Age = () => screen.getByText(/Idade/i)
const Cpf = () => screen.getByText(/CPF/i)
const buttonProximo = () => screen.getByRole('button', {name: /Próximo/i})
const buttonVoltar = () => screen.getByRole('button', {name: /Voltar/i})

describe('<IndexForm/>', () => {
    const onClick = jest.fn()
    test('Validate a person registration form', () =>{
        render(<MemoryRouter><PersonForm/></MemoryRouter>)

        expect(Name()).toBeInTheDocument()
        expect(Age()).toBeInTheDocument()
        expect(Cpf()).toBeInTheDocument()

        expect(buttonProximo()).toBeInTheDocument()
        expect(buttonProximo()).toHaveAttribute('type', 'submit') //Validando o atributo.

        expect(buttonVoltar()).toBeInTheDocument()
        /*userEvent.click(buttonVoltar())
        expect(onClick).toHaveBeenCalled()*/
    })
})

describe('Validate onSubmit - Form', () => {
    test('Validade event onsubmit form', async () => {
        const onSubmit = jest.fn()
        render(
            <MemoryRouter >
                <PersonForm/>
            </MemoryRouter>
        )

        userEvent.click(buttonProximo())
        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith(fakePerson, expect.anything())
        )
    })
})




/*describe('Function Back', () => {
    test('Validade function back', () => {
        render(
              <MemoryRouter>
                    <IndexForm/>
              </MemoryRouter>
        )

        userEvent.click(buttonVoltar())
    })
})*/

