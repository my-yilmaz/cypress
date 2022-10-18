describe('Negative Login',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    const wrongEmail='yanlisemail@yahoo.com'
    const wrongPassword='yanlissifre'
    beforeEach(()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
    })
    it('wrong email',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.get('.login-form > form > [type="email"]').type(wrongEmail)
        cy.get('[type="password"]').type(validPassword)
        cy.get('.login-form > form > .btn').click()
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    })
    it('wrong password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.get('.login-form > form > [type="email"]').type(validEmail)
        cy.get('[type="password"]').type(wrongPassword)
        cy.get('.login-form > form > .btn').click()
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    })
    it('wrong email and wrong password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.get('.login-form > form > [type="email"]').type(wrongEmail)
        cy.get('[type="password"]').type(wrongPassword)
        cy.get('.login-form > form > .btn').click()
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    })
})
/*
Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/