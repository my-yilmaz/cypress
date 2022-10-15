describe('Viewports',()=>{

    it('test 1',()=>{
        cy.visit('https://www.amazon.com')
       cy.viewport('iphone-8')
       cy.screenshot()
    })

    it.only('test 2',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('samsung-note9')
        cy.screenshot()
    })

    it('test 3',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport(2500,1500)
        cy.screenshot()
    })
})