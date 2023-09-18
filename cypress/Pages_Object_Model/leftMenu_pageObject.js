export class LeftMenuPageObject{
    static get getUserNameField(){
        return cy.get('#username');
    }

    static get getPasswordField(){
        return cy.get('#password');
    }

    static get getSignInButton(){
        return cy.xpath('//*[@id="root"]/div/main/div[1]/form/button');
    }

    static get getIconMenuButtom(){
        return cy.xpath('//*[@id="root"]//div[1]/button/span[1]');
    }

    static get getAccountBalanceText(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[2]`);
    }

    static get getAccountBalanceNumbers(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[1]/h6[1]`);
    }

    static get getHomeButton(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[1]`);
    }

    static get getMyAccountButton(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[2]`);
    }

    static get getBankAccountsButton(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[3]`);
    }

    static get getNotificationsbutton(){
        return cy.xpath(`//*[@id="root"]//div[2]/div[3]//a[4]`);
    }
}