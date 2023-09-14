export class SignUpPageObject {

    static get getLogo() {
        return cy.get('svg.makeStyles-logo-3')
    }

    static get getFirstName() {
        return cy.get('#firstName')
    }

    static get getLastName() {
        return cy.get('#lastName')
    }

    static get getUserName() {
        return cy.get('#username')
    }

    static get getPassword() {
        return cy.get('#password')
    }

    static get getConfirmPassword() {
        return cy.get('#confirmPassword')
    }

    static get getSignUpButton() {
        return cy.get('span.MuiButton-label')
    }

    static get getSignInLink() {
        return cy.get('div.MuiGrid-root.MuiGrid-item')
    }

    static get getFotter() {
        return cy.xpath('//p[@class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"]')
    }

    static get getFirstNameError(){
        return cy.get('#firstName-helper-text')
    }

}