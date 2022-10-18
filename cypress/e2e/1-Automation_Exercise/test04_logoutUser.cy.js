describe('Logout User',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    it('logout user',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.get('.login-form > form > [type="email"]').type(validEmail)
        cy.get('[type="password"]').type(validPassword)
        cy.get('.login-form > form > .btn').click()
        cy.get(':nth-child(10) > a').should('include.text','Logged in as Zetta')
        cy.contains('Logout').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
    })
})

/*
Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page
*/