describe('Verify Subscription in Home Page',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    it('verify subscription in home page',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.get('.single-widget > h2').scrollIntoView()
        cy.get('.single-widget > h2').should('be.visible','SUBSCRIPTION')
        cy.get('#susbscribe_email').type(validEmail)
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('have.text','You have been successfully subscribed!')
    })
})

/*
Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible
*/