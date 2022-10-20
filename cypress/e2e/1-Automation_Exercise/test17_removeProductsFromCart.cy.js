describe('Remove Products From Cart',()=>{
    it('remove products from cart',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.active').should('have.text','Shopping Cart')
        cy.get('.cart_quantity_delete > .fa').click()
        cy.get('#empty_cart > .text-center').should('have.text','Cart is empty! Click here to buy products.')
    })
})

/*
Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart
'Cart is empty! Click here to buy products.'
*/