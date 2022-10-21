describe('Add review on product',()=>{
    it('add review on product',()=>{
        cy.anasayfa()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url().should('include','products')
        cy.url().should('include','products')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.active > a').should('have.text','Write Your Review')
        cy.get('#name').type('Zetta')
        cy.get('#email').type('Zetta123@gmail.com')
        cy.get('#review').type('Thanks')
        cy.get('#button-review').click()
        cy.get('.col-md-12 > .alert-success').should('include.text','Thank you for your review.')
    })
})

/*
Test Case 21: Add review on product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'
*/