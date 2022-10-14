describe('checkbox', () => {
    //it.only dedigimiz zamanda sadece o testi calistirir

    it.skip('checking single box', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click();
        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked') -> isaretlenmedigini test eder
        cy.get('#layered_category_4').click();
        cy.get('#layered_category_4').should('be.checked')
        // tiklamayi kaldirmak
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
    })

    it.skip('check all boxes', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click();
        cy.get('[type="checkbox"]').check()
        cy.wait(1000);
        cy.get('[type="checkbox"]').uncheck()
    })

    it('click', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click();
        cy.get('[type="checkbox"]').click({ multiple: true })
        //click({ multiple: true }) click tek elemente uygulanir birden fazla elemente uygulamak
        // icin icine { multiple: true } yazilmalidir
        // ASSERT 1.YOL
        cy.get('[type="checkbox"]').should('be.checked')
        //2.yol assert
        cy.get('[type="checkbox"]').first().parent().should('have.class', 'checked')
    })
})