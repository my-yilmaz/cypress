describe('Multiple Windows',()=>{
    it('Multiple Windows',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click();
        //invoke('removeAttr','Attribute Name')
        //attribute silniyor
        //yeni sekme acmiyor. tiklandiginda ayni pencerede aciyor
        cy.get('h3').should('have.text','New Window')
    })
    it.only('yeni url ile acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((elements)=>{
            const newURL=elements.prop('href')
            cy.visit(newURL);
        })
        
        //prop() ile 'href' degerini aldik
        //prop()-> jquery, attribute degerini alan bir method
        cy.get('h3').should('have.text','New Window')})
})