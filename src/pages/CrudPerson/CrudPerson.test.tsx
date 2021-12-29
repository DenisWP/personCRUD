import {MemoryRouter} from "react-router-dom";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import CrudPerson from "./CrudPerson";


const getVoltarButton = () => screen.getByRole('button', {name: /Voltar/i})
const getNovaPessoa = () => screen.getByRole('button', {name: /Nova Pessoa/i})


describe('Verificar os botões "Nova Pessoa" e "Voltar" estão presentes no componente', () => {

   /* test('Verificar se ao clicar no botão "Nova Pessoa" irá direcionar para a tela de cadastro', () => {
        render(<CrudPerson/>)
        userEvent.click(getNovaPessoa())
        expect(mockNavigateCadPessoa).toHaveBeenCalledTimes(1)
        expect(mockNavigateCadPessoa).toHaveBeenCalledWith('/pessoas_cadastro')
    })*/

    {/*Testes simples para validar se os botoes estao sendo apresentados*/}
    test('Verificaçao da exibiçao dos botões "Voltar" e "Nova Pessoa"', () => {
        render(
            <MemoryRouter>
                <CrudPerson/>
            </MemoryRouter>
        )
        expect(getVoltarButton()).toBeInTheDocument()
        expect(getNovaPessoa()).toBeInTheDocument()
    })
})