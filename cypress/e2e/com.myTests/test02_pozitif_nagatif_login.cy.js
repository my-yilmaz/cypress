describe('Login Test',()=>{

    const validMail = "afaefaeaa.afawf@gmail.com";
    const validPassword = "1234.asd";
    const wrongPassword="1234asd";

it('Log in pozitif',()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.contains('Login').click();
    cy.get('.login-form > form > [type="email"]').type(validMail);
    cy.get('[type="password"]').type(validPassword);
    cy.get('.login-form > form > .btn').click();

    cy.get(':nth-child(10) > a').should('include.text','Muhammed Yılmaz')

})
it('Log in negatif',()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.contains('Login').click();
    cy.get('.login-form > form > [type="email"]').type(validMail);
    cy.get('[type="password"]').type(wrongPassword);
    cy.get('.login-form > form > .btn').click();
    cy.get('.login-form > form > p').should('include.text','Your email or password is incorrect!')
    });
});