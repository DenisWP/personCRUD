describe('Home', () => {
    it ('start successfully', () => {
        cy.iniciar()
        cy.get('[class="btn btn-success"]').should('exist')
    })
})