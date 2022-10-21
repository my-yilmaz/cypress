describe('Verify Scroll Up using Arrow button and Scroll Down functionality',()=>{
    it('verify Scroll Up using Arrow button and Scroll Down functionality',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.scrollTo('bottom')
        cy.get('.single-widget > h2').should('be.visible','SUBSCRIPTION')
        cy.get('#scrollUp').click()
        cy.get('.active > :nth-child(1) > h2').should('have.text','Full-Fledged practice website for Automation Engineers')
    })
})

/*
Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Click on arrow at bottom right side to move upward
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
*/