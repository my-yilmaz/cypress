describe('Verify address details in checkout page',()=>{
    it('verify address details in checkout page',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.register()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper').scrollIntoView()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper').trigger('mouseover')
        cy.contains('Add to cart').click()
        cy.get('u').click()
        cy.get('.active').should('have.text','Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').should('include.text','yilmaz')
        cy.get('#address_invoice').should('include.text','yilmaz')

    })
})

/*
Test Case 23: Verify address details in checkout page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
*/