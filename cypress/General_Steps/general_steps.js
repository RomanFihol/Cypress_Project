export class GeneralSteps{
    static get visit(){
        cy.visit('http://localhost:3000/signup')
    }
}