// <reference types="Cypress" />


describe('Check the Left Menu', () => {
    beforeEach('Open the local App and autorised', () => {
      cy.visit(`http://localhost:3000/`);
      cy.get('#username').type(`Katharina_Bernier`);
      cy.get('#password').type(`s3cret`);
      cy.get('.makeStyles-form-4 > button').click();
    });

    it(`Open and hide the Left Menu`, () => {
      cy.xpath('//*[@id="root"]//div[1]/button/span[1]').should('be.visible').click();
      cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[2]`).should(`not.be.visible`);
      cy.xpath('//*[@id="root"]//div[1]/button/span[1]').should('be.visible').click();
      cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[2]`).should(`be.visible`);
    })

    it(`Check the visibility of the Account balance`, () => {
      cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[2]`).should(`be.visible`);
      cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[1]`).invoke('text').then((text) => {
        const hasNumbers = /\d/.test(text);
        expect(hasNumbers).to.be.true;  //text contains numbers
      });
    })

    it(`Check main buttons-links`, () => {
      //Check Home button
      cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[1]`).should('contain.text', 'Home');

      //Check My Account button
      cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[2]`).should('contain.text', 'My Account');

      //Check Bank Accounts Button
      cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[3]`).should('contain.text', 'Bank Accounts');

      //Check Notifications button
      cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[4]`).should('contain.text', 'Notifications');
    })
});