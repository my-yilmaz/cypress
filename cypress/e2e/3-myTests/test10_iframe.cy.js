describe('iframe',()=>{
    it('iframe test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor');
        cy.frameLoaded('#mce_0_ifr');
        //frameLoaded('locator') iframe'in yerini tanimliyoruz
        //iframe'i yukle
        cy.iframe().find('p').clear();
        //iframe git
        //find('p') p tag'ini bul
        //clear 
        cy.iframe().type('Cypress is fun 👌😜😎');
        cy.get('.large-4 > div').should('contain','Elemental Selenium')
    })
})