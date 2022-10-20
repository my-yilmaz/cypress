describe('View Category Products',()=>{
    it('view category products',()=>{
        cy.anasayfa()
        cy.get('.left-sidebar > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title').should('have.text','Women - Dress Products')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title').should('have.text','Men - Tshirts Products')

    })
})

/*
Test Case 18: View Category Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page
*/