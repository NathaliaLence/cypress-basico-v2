// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => cy.visit('./src/index.html'))

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        
    })

    it ('Preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Nathalia');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('natylence@gmail.com');
        cy.get('#open-text-area').type('Teste', {delay:0});
        cy.get('.button').click();
        cy.get('.success').should('be.visible');
    })

    it ('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Nathalia');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('com');
        cy.get('#open-text-area').type('Teste', {delay:0});
        cy.get('.button').click();        
        cy.get('.error').should('be.visible');
    })

    it ('Mantem campo telefone em branco ao submeter letras', function(){
        cy.get('#phone').type('teste');
        cy.get('#phone').should('have.value', '');
    })

    it ('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Nathalia');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('natylence@gmail.com');
        cy.get('#open-text-area').type('Teste', {delay:0});
        cy.get('#phone-checkbox').click();
        cy.get('.button').click();        
        cy.get('.error').should('be.visible');
    })

    
    it ('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('.button').click();        
        cy.get('.error').should('be.visible');
    })
  })