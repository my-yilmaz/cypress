import { faker } from '@faker-js/faker';
describe('Register',()=>{
const firstname=faker.name.firstName();
const lastname=faker.name.lastName();
const email=faker.internet.email();
const password=faker.internet.password();
    
    
    it('Test Case 01',()=>{
        cy.visit("https://www.automationexercise.com/")
        cy.get('.active > :nth-child(1) > h1').should('have.text','AutomationExercise')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
        cy.get('[type="text"]').type(firstname)
        cy.get('.signup-form > form > [type="email"]').type(email)
        cy.get('.signup-form > form > .btn').click()
        cy.get(':nth-child(1) > b').should('be.visible','ENTER ACCOUNT INFORMATION')
        cy.get('#id_gender1').click();
        cy.get('#password').type(password);
        cy.get('#days').select('12');
        cy.get('#months').select('12');
        cy.get('#years').select('2012');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type(firstname)
        cy.get('#last_name').type(lastname)
        cy.get('#company').type('yilmaz')
        cy.get('#address1').type('Newyork')
        cy.get('#address2').type('Arizona')
        cy.get('#country').select('United States')
        cy.get('#state').type('xyz')
        cy.get('#city').type('London')
        cy.get('#zipcode').type('zip12345');
        cy.get('#mobile_number').type('02223334455')
        cy.get('.login-form > form > .btn').click();
        cy.get('b').should('be.visible','ACCOUNT CREATED!')
        cy.get('.pull-right > .btn').click();
        cy.get(':nth-child(10) > a').should('include.text','Logged in as')
    })
})