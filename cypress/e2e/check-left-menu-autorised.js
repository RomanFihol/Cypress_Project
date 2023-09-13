// <reference types="Cypress" />


describe('Check left menu', () => {
    beforeEach('Open the local App and autorised', () => {
      cy.visit(`http://localhost:3000/`);
      cy.get('#username').type(`Katharina_Bernier`);
      cy.get('#password').type(`s3cret`);
      cy.get('.makeStyles-form-4 > button').click();
    });

    it(`Open and hide left menu`, () => {
      cy.xpath('//*[@id="root"]//div[1]/button/span[1]').click();
      // .should(`Account Balance`, not.be.visible);
      // cy.get('[data-test="sidenav-toggle"]').click()
    })
});