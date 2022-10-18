describe('Place Order: Register before Checkout',()=>{
    it('register before checkout',()=>{
        cy.anasayfa()
        cy.homePageİsVisible()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.register()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').should('include.text','yilmaz')
        cy.get('.form-control').type('Hello World')
        cy.get(':nth-child(7) > .btn').click()
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('yilmaz')
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1111-2222-3333-4444')
        cy.get('.cvc > .form-control').clear().type('444')
        cy.get(':nth-child(2) > .form-control').type('12')
        cy.get(':nth-child(3) > .form-control').type('2026')
        cy.get('#submit').click()
       // cy.get('#success_message > .alert-success').should('be.visible','Your order has been placed successfully!')
    })
})

/*
Test Case 15: Place Order: Register before Checkout
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
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
*/