// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-iframe');
require('@4tw/cypress-drag-drop')
//=========================================================
// Cypress.Commands.add -> komut ekle, tanımla
// automationpractice.com -> login icin tanımlandı
Cypress.Commands.add('loginAP',(email,password)=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click();
    cy.get('#email').click().type(email);
    cy.get('#passwd').click().type(password);
    cy.get('#SubmitLogin > span').click();
})
//=========================================================


// Amazon arama
Cypress.Commands.add('amozanSearch',(urun)=>{
    cy.visit('https://www.amazon.com/')
    cy.wait(2000)
        cy.get('#twotabsearchtextbox').type(urun)
        cy.get('#nav-search-submit-button').click()
})


//=========================================================
// dosya yuklemek icin
// https://www.npmjs.com/package/cypress-file-upload
//npm install --save-dev cypress-file-upload
// cypress-file-upload
import 'cypress-file-upload';