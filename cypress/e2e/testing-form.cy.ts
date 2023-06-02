describe('Testando formulário', ()=>{
    it('Visitando e testando a página do formulário', ()=>{
        it('Criando session', ()=>{
            cy.visit("http://localhost:3000/");
            cy.get('#cypress-input-name').type("Ana Carolina");
            cy.get('#cypress-input-email').type("anacarolina@email.com");
            cy.get('#cypress-input-document').type("1234567890");
            cy.get('#cypress-input-phone').type("55 9990000000");
            cy.get('#cypress-input-birthdate').type("2020-12-05");
            cy.get('#cypress-input-hascar').check({force:true})
            cy.get('#cypress-input-submit-button').click()            
        })
    })
})