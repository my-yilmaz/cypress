describe('Search Products and Verify Cart After Login',()=>{
    const validEmail='Sharon.Windler@yahoo.com'
    const validPassword='IagLqzGu_7nDx7j'
    it('search products and verify cart after login',()=>{
        cy.anasayfa()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url().should('include','products')
        cy.get('#search_product').type('Blue Top')
        cy.get('#submit_search').click()
        cy.get('.title').should('be.visible','SEARCHED PRODUCTS')
        cy.get('.features_items').should('include.text','Blue Top')
        cy.get('.productinfo > .btn').click()
        cy.get('u').click()
        cy.get('#cart_items > :nth-child(1)').should('include.text','Blue Top')
        cy.get('.nav > :nth-child(4)').click()
        cy.get('.login-form > form > [type="email"]').type(validEmail)
        cy.get('[type="password"]').type(validPassword)
        cy.get('.login-form > form > .btn').click()
        cy.contains('Cart').click()
        cy.get('#cart_items > :nth-child(1)').should('include.text','Blue Top')
    })
})

/*
Test Case 20: Search Products and Verify Cart After Login
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well
*/