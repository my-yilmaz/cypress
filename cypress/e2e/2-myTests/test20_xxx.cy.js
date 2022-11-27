describe('Paylimm Bank',()=>{
    before(function(){
        cy.fixture('creds').then(function(data){
            this.data=data
        })
    })
it('paylinn login test',function(){
    cy.visit('https://paylinn.com/')
    cy.contains('Sign In').click()
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.username)
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.password)
    cy.get('.MuiButtonBase-root').click()
    cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')
    cy.get('.header__nav').should('contain.text','Welcome')
    .and('contain.text','React')
    .and('contain.text','Logout')
    .and('contain.text',this.data.username)
    cy.get('.MuiButtonBase-root').click()
    cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')
    cy.get('.header__nav').should('contain.text','Welcome')

    
})
});