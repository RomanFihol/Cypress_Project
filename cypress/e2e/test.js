/// <reference types = 'cypress' />

describe('Test', ()=>{

    it('test', ()=>{
        cy.visit('http://localhost:3000/signup')
       // cy.get('#firstName').type('sdgag')
        cy.xpath(`//input[@id="firstName"]`).type('sdwer')
       // cy.xpath('dsfsd')
    })
})
