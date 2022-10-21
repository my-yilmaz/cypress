describe('Download Invoice after purchase order',()=>{
    it('download Invoice after purchase order',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper').scrollIntoView()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper').trigger('mouseover')
        cy.contains('Add to cart').click()
        cy.get('u').click()
        cy.get('.active').should('have.text','Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.register()
        cy.contains('Cart').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').should('include.text','yilmaz')
        cy.get('#address_invoice').should('include.text','yilmaz')
        cy.get('.form-control').type('Hello World')
        cy.get(':nth-child(7) > .btn').click()
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('yilmaz')
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1111-2222-3333-4444')
        cy.get('.cvc > .form-control').clear().type('444')
        cy.get(':nth-child(2) > .form-control').type('12')
        cy.get(':nth-child(3) > .form-control').type('2026')
        cy.get('#submit').click()
        // cy.get('#success_message > .alert-success').should('include.text','Your order has been placed successfully!')

    })
})

/*
Test Case 24: Download Invoice after purchase order
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
*/