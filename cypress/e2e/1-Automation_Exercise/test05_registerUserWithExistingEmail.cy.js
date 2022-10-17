describe('Register User with existing email',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    it('register user with existing email',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
        cy.get('[type="text"]').type('firstname')
        cy.get('.signup-form > form > [type="email"]').type(validEmail)
        cy.get('.signup-form > form > .btn').click()
        cy.get('.signup-form > form > p').should('be.visible','Email Address already exist!')
    })
})

/*
Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible
*/