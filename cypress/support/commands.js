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

// automationexercise anasayfası
Cypress.Commands.add('anasayfa',()=>{
    cy.visit('https://www.automationexercise.com/')
})
// automationexercise anasayfasını dogrulama
Cypress.Commands.add('homePageİsVisible',()=>{
    cy.get('.active > :nth-child(1) > h1').should('have.text','AutomationExercise')
})

// automationexercise kullanıcı kaydı
import { faker } from '@faker-js/faker';
Cypress.Commands.add('register',()=>{
    const firstname=faker.name.firstName();
    const lastname=faker.name.lastName();
    const email=faker.internet.email();
    const password=faker.internet.password();
    console.log('sifre:' +password);
    console.log('email:' +email);
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[type="text"]').type(firstname)
    cy.get('.signup-form > form > [type="email"]').type(email)
    cy.get('.signup-form > form > .btn').click()
    cy.get(':nth-child(1) > b').should('be.visible')
    cy.get('#id_gender1').click()
    cy.get('#password').type(password)
    cy.get('#days').select('12')
    cy.get('#months').select('12')
    cy.get('#years').select('2012')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name').type(firstname)
    cy.get('#last_name').type(lastname)
    cy.get('#company').type('yilmaz')
    cy.get('#address1').type('Newyork')
    cy.get('#address2').type('Arizona')
    cy.get('#country').select('United States')
    cy.get('#state').type('xyz')
    cy.get('#city').type('London')
    cy.get('#zipcode').type('zip12345')
    cy.get('#mobile_number').type('02223334455')
    cy.get('.login-form > form > .btn').click()
    cy.get('b').should('have.text','Account Created!')
    cy.get('.pull-right > .btn').click()
    cy.get(':nth-child(10) > a').should('include.text','Logged in as')
})