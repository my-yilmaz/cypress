describe('Verify All Products',()=>{
    it('verify all products',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('Products').click()
        cy.get('.title').should('be.visible','ALL PRODUCTS')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover')
        cy.contains('View Product').click()
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('.product-information > :nth-child(6)').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')

      
    })
})

/*
Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
*/