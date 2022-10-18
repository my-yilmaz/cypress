describe('Search Products',()=>{
    it('search products',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('Products').click()
        cy.get('.title').should('be.visible')
        cy.get('#search_product').type('Blue')
        cy.get('#submit_search').click()
        cy.get('.title').should('be.visible')
        cy.get('.productinfo > p').should('have.text','Blue')
        cy.get('.features_items').should('be.visible')
    })
})

/*
Test Case 9: Search Product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible
*/