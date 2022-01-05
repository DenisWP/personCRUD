
Cypress.Commands.add('iniciar', () => {
    cy.visit('/')
    cy.get('[class="btn btn-primary"]').click()
})