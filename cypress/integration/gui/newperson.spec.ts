
const faker = require('faker-br')

describe('New person', () => {
    beforeEach(() => cy.iniciar()) //Antes de cadastrar a pessoa, eu preciso acessar.

    it.skip('Register new person viaCEP', () => {
        cy.newperson()
        //Criando um objeto faker, para cadastrar uma nova pessoa.
        const cpfauto = faker.br.cpf()
        const newPerson = {
            name: `Denis Automatizado-${faker.random.word(2)}`,
            age: faker.random.number(100),
            cpf: cpfauto,
            cep: '57071421',
            numero: faker.random.number(100),
            complemento: `Casa-${faker.random.word(2)}`
        }
        cy.gui_createPersonViaCep(newPerson)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/pessoas`) //Ver se foi direcionado para a página certa.
    })

    it('Register new person not viaCEP ',  () => {
        cy.newperson()
        const cpfauto = faker.br.cpf()
        const newPerson = {
            name: `Denis Automatizado-${faker.random.word(2)}`,
            age: faker.random.number(100),
            cpf: cpfauto,
            cep: '57071421',
            logradouro: `logradouro-${faker.random.word(5)}`,
            numero: faker.random.number(100),
            complemento: `Casa-${faker.random.word(2)}`,
            bairro: `bairro-${faker.random.word(3)}`,
            cidade: `cidade-${faker.random.word(3)}`,
            uf: `estado-${faker.random.word(2)}`
        }
        cy.gui_createPerson(newPerson)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/pessoas`) //Ver se foi direcionado para a página certa.
    });
})