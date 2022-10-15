describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        //cy.get('#filesToUpload').attachFile('img01.jpg')
        const path1='img01.jpg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('be.visible','img01.jpg')
    })

    it('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='img01.jpg'
        const path2='img02.jpg'
        const path3='img03.jpg'
        cy.get('#filesToUpload').attachFile(path1).attachFile(path2).attachFile(path3);

        
    })
    it('coklu dosya yükleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['img01.jpg','img02.jpg','img03.jpg'])
    
    })
    it('coklu dosya yükleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='img01.jpg'
        const path2='img02.jpg'
        const path3='img03.jpg'
        cy.get('#filesToUpload')
        .attachFile([path1,path2,path3])
        
    })
    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='img01.jpg'
        cy.get('#filesToUpload')
        .attachFile({filePath:path1,fileName:'deneme.jpeg'})
        //yuklenen dosya ismini degistirme
        cy.contains('deneme.jpeg').should('be.visible')
    })
})