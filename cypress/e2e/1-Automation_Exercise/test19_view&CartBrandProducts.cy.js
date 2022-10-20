describe('View & Cart Brand Products',()=>{
    it('view & cart brand products',()=>{
        cy.anasayfa()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.brands_products > h2').should('include.text','Brands')
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.url().should('include','Polo')
        cy.get('.title').should('have.text','Brand - Polo Products')
        cy.get('.brands-name > .nav > :nth-child(3) > a').click()
        cy.url().should('include','Madame')
        cy.get('.title').should('have.text','Brand - Madame Products')
    })
})

/*
Test Case 19: View & Cart Brand Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products
*/