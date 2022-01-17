import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";
import AddressForm from "./AddressForm";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import axios from "axios";

jest.mock('axios')

const fakeAddress = {
    id_pessoa: 200,
    cep: '35454490',
    logradouro: 'Rua do Teste',
    numero: 20,
    complemento: 'casa A',
    bairro: 'Centro',
    cidade: 'Itabirito',
    uf: 'MG'
}

const getForm = () => screen.getByTestId('formendereco')
const getCep = () =>  (screen.getByRole('textbox', {name: /cep/i}) as HTMLInputElement)
const getLogradouro = () =>  (screen.getByLabelText(/logradouro/i) as HTMLInputElement)
const getNumero = () =>  (screen.getByLabelText(/número/i) as HTMLInputElement)
const getComplemento = () =>  (screen.getByLabelText(/complemento/i) as HTMLInputElement)
const getBairro = () =>  (screen.getByLabelText(/bairro/i) as HTMLInputElement)
const getCidade = () =>  (screen.getByLabelText(/cidade/i) as HTMLInputElement)
const getUF = () =>  (screen.getByLabelText(/uf/i) as HTMLInputElement)
const btnSalvar = () => screen.getByRole('button', {name: /salvar/i})

describe('<AddressFrom>', () => {

    beforeEach(() => {
        render(<MemoryRouter><AddressForm/></MemoryRouter>)
    })

     test.skip('Should add new task when form submitted', () => {
        //expect(onSubmit).toHaveBeenCalledWith(fakeAddress)
        //expect(getForm()).toHaveBeenCalledTimes(1)
        //fireEvent.submit(getForm())
        // console.log(getForm())

         const onSubmit = jest.fn()
         fireEvent.submit(getForm())
         expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    test.skip('validate Iteration with the form', () => {
        fireEvent.change(getCep(), {target: {value: fakeAddress.cep}})
        fireEvent.change(getLogradouro(), {target: {value: fakeAddress.logradouro}})
        fireEvent.change(getNumero(), {target: {value: fakeAddress.numero}})
        fireEvent.change(getComplemento(), {target: {value: fakeAddress.complemento}})
        fireEvent.change(getBairro(), {target: {value: fakeAddress.bairro}})
        fireEvent.change(getCidade(), {target: {value: fakeAddress.cidade}})
        fireEvent.change(getUF(), {target: {value: fakeAddress.uf}})
        fireEvent.click(btnSalvar())
        
        //  assert
    })

    test.skip('Validate address  registration form', () => {
        //expect(getForm()).toBeInTheDocument()
        expect(getCep()).toBeInTheDocument()
        expect(getLogradouro()).toBeInTheDocument()
        expect(getNumero()).toBeInTheDocument()
        expect(getComplemento()).toBeInTheDocument()
        expect(getBairro()).toBeInTheDocument()
        expect(getCidade()).toBeInTheDocument()
        expect(getUF()).toBeInTheDocument()
    })
})