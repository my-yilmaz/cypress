describe('Drag and Drop',()=>{
    it.skip('double clicks',()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        //cift tiklama
        cy.get('#dblClkBtn').dblclick()
        //sag tiklama
        cy.get('#dblClkBtn').rightclick()

        // on acilir pencerelere ulasmak icin kullanilan bir sistem
        cy.on('window.alert',(str)=>{
            //1.yol
            expect(str).to.equal('hi, JavaTpoint Testing')
            //2. yol
            expect(str).to.eq('hi, JavaTpoint Testing')
            //3.yol
            expect(str).to.contains('hi, JavaTpoint Testing')
        })
    })

    it('drag and drop',()=>{
        // npm install --save-dev @4tw/cypress-drag-drop
        // import '@4tw/cypress-drag-drop' ya da command.js: require('@4tw/cypress-drag-drop')
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#sourceImage').drag('#targetDiv')
        //ilki suruklenecek element, drag icerisindeki ise suruklenecegi yer
    })
})