describe('Add Products in Cart',()=>{
    it('add products in cart',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('Products').click()
        cy.get(':nth-child(3) > .product-image-wrapper').trigger('mouseover')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper').trigger('mouseover')
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('#cart_info').should('have.length','1')
        cy.get('#product-1 > .cart_price > p').should('be.visible')
        cy.get('#product-1 > .cart_quantity').should('be.visible')
        cy.get('#product-1 > .cart_total > .cart_total_price').should('be.visible')
        cy.get('#product-2 > .cart_price > p').should('be.visible')
        cy.get('#product-2 > .cart_quantity').should('be.visible')
        cy.get('#product-2 > .cart_total > .cart_total_price').should('be.visible')
    })
})

/*
Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price
*/