import api from "../../src/services/api";


Cypress.Commands.add('iniciar', () => {
    cy.visit('/')
    cy.get('[class="btn btn-primary"]').click()
})

Cypress.Commands.add('newperson', ()=> {
    cy.contains('Nova Pessoa').click()
})

Cypress.Commands.add('gui_createPerson', newPerson => {
    cy.get('#namePerson').type(newPerson.name)
    cy.get('#agePerson').type(newPerson.age)
    cy.get('#cpfPerson').type(newPerson.cpf)
    cy.contains('Próximo').click()
    cy.wait(1000)
    cy.get('#formGridCep').type(newPerson.cep)
    cy.contains('Pesquisar').click()
    cy.wait(1000)
    cy.get('#formGridNumero').type(newPerson.numero)
    cy.get('#formGridComplemento').type(newPerson.complemento)
    cy.contains('Salvar').click()
})