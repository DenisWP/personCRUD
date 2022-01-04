import React from "react";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Home from "./Home";

describe('<Home/>', () => {
    test('Validar descrição do Card', () => {
        render(
            <MemoryRouter> {/*Como useu navigate, preciso envolver os testes em um dos componentes <StaticRouter>, <MemoryRouter> ou <BrowserRouter>*/}
                <Home/>
            </MemoryRouter>
       )
        const hearderValidation = screen.getByText(/Estudo sobre Desenvolvimento WEB./i)
        expect(hearderValidation).toBeInTheDocument()
    })

    test('Deve conter o botão iniciar', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        const buttonIniciar = screen.getByRole('button', {name: /Iniciar/i,})
        expect(buttonIniciar).toBeInTheDocument()
    })
})