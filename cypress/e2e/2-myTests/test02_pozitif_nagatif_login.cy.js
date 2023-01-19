describe('Login Test',()=>{

    const validMail = "afaefaeaa.afawf@gmail.com";
    const validPassword = "1234.asd";
    const wrongPassword="1234asd";

it('Log in pozitif',()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.log("Siteye gidildi")
    cy.contains('Login').click();
    cy.log("Logine tiklandi")
    cy.get('.login-form > form > [type="email"]').type(validMail);
    cy.log("Gecerli mail girildi")
    cy.get('[type="password"]').type(validPassword);
    cy.log("Gecerli sifre girildi")
    cy.get('.login-form > form > .btn').click();
    cy.log("Login butonuna tiklandi")
    cy.get(':nth-child(10) > a').should('include.text','Muhammed Yılmaz')
    cy.log("Basarili giris yapildigi dorulandi")

})
it('Log in negatif',()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.log("Siteye gidildi")
    cy.contains('Login').click();
    cy.log("Logine tiklandi")
    cy.get('.login-form > form > [type="email"]').type(validMail);
    cy.log("Gecerli mail girildi")
    cy.get('[type="password"]').type(wrongPassword);
    cy.log("Gecersiz sifre girildi")
    cy.get('.login-form > form > .btn').click();
    cy.log("Login butonuna tiklandi")
    cy.get('.login-form > form > p').should('include.text','Your email or password is incorrect!')
    cy.log("Gecersiz sifre ile giris yapilamadigi dogrulandi")
    });
});