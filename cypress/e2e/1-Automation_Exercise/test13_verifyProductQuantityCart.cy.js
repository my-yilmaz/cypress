describe('Verify Product Quantity in Cart',()=>{
    it('verify product quantity in cart',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.contains('View Product').click()
        cy.get('#quantity').clear().type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('.disabled').should('include.text','4')
    })
})

/*
Test Case 13: Verify Product quantity in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity
*/