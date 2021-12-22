import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hearder from "./Hearder";
import {MemoryRouter} from "react-router-dom";

describe('<Header/>', () => {
        test('Validar se o T[itulo será apresentado', () => {
            render(
                <MemoryRouter>
                    <Hearder/>
                </MemoryRouter>            )

            const navTitile = screen.getByText("Person CRUD")
            expect(navTitile).toBeInTheDocument()
        })
})
