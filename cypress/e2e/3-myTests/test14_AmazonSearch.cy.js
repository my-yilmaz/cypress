describe('Amazon Search',()=>{

    it('amazon search',()=>{
       cy.amozanSearch('iphone')
       cy.get('.sg-col-14-of-20 > .sg-col-inner').should('include.text','iphone')
    })
})