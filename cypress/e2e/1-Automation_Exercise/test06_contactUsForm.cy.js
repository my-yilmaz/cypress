describe('Contact Us Form',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    it('contact us form',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('Contact us').click()
        cy.get('.shop-menu > .nav > :nth-child(8) > a').should('be.visible','GET IN TOUCH')
        cy.get(':nth-child(2) > .form-control').type('Zetta')
        cy.get(':nth-child(3) > .form-control').type(validEmail)
        cy.get(':nth-child(4) > .form-control').type('Cypress')
        cy.get(':nth-child(5) > .form-control').type('Cypress 10 numara')
        cy.get(':nth-child(6) > .form-control').attachFile('img01.jpg')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.status').should('be.visible','Success! Your details have been submitted successfully.')
        cy.get('span').click()
        cy.homePageİsVisible()
    })
})

/*
Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully
*/