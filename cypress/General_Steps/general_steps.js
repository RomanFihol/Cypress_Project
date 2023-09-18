export class GeneralSteps{
    static get visit(){
        cy.visit('/signup');
    }
    static get visitSignUpPage(){
        cy.visit('/signin');
    }

}