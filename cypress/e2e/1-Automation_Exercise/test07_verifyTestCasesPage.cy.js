describe('Verify Test Cases Page',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    it('verify test cases page',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('Test Cases').click()
        cy.get('b').should('be.visible','TEST CASES')
    })
})

/*
Test Case 7: Verify Test Cases Page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/