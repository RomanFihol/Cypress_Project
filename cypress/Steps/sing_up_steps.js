import { SignUpPageObject } from "../Pages_Object_Model/signUp_pageObject";

export class SignUpSteps {

    fillTheForm(user) {

        if (user.first_name) {
            SignUpPageObject.getFirstName.type(user.first_name).should('have.attr', 'required');
        }
        if (user.last_name) {
            SignUpPageObject.getLastName.type(user.last_name).should('have.attr', 'required');
        }
        if (user.user_name) {
            SignUpPageObject.getUserName.type(user.user_name).should('have.attr', 'required');
        }
        if (user.password) {
            SignUpPageObject.getPassword.type(user.password).should('have.attr', 'required');
        }
        if (user.confirm_password) {
            SignUpPageObject.getConfirmPassword.type(user.confirm_password).should('have.attr', 'required');
        }
        cy.intercept('POST', 'http://localhost:3001/users', () => {
        }).as('smth')
        SignUpPageObject.getSignUpButton.click();
        cy.wait('@smth').then((res) => {
            expect(res.response.statusCode).to.equal(201)
        })
    }
    test(user) {
        SignUpPageObject.getLastName.click();
        SignUpPageObject.getFirstNameError.should('be.visible');
        SignUpPageObject.getFirstName.type(user.first_name);
        SignUpPageObject.getFirstNameError.should('not.exist');

    }
}


export const signUpStep = new SignUpSteps;
