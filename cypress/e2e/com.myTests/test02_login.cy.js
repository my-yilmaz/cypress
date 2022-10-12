describe('Login Test',()=>{

    const eMail = "afaefaeaa.afawf@gmail.com";
    const ePassword = "1234.asd";

it('Test 01',()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.contains('Login').click();
    cy.get('.login-form > form > [type="email"]').type(eMail);
    cy.get('[type="password"]').type(ePassword);
    cy.get('.login-form > form > .btn').click();
});



})