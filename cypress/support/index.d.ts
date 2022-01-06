/*Na nova versao do Cypress, tenho que declarar o comando recem adicionado para que seja detectado pelo TypesCript*/
declare namespace Cypress {
    interface Chainable {
        iniciar(): Chainable<Element> //Declarando o comando iniciar.
        newperson(): Chainable<Element> //Declarando o comando newperson
        gui_createPerson(newPerson): Chainable<Element> //Cadastrar nova pessoa.
    }
}