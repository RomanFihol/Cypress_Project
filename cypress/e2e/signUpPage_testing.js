/// <reference types = 'cypress' />

import { GeneralSteps } from "../General_Steps/general_steps"
import { signUpStep } from "../Steps/sing_up_steps";
import { users } from "../TestData/data_for_signUp_page";
const userWithValidDate = users[users.findIndex((obj) => obj.scenario === 'valid data')]
const userBlankFirstName = users[users.findIndex((obj) => obj.scenario === 'blank first name')]

describe('"SignUp" page testing', () => {
    beforeEach(() => {
        GeneralSteps.visit;

    })

    it(`Fill the form with ${userWithValidDate.scenario},and check status code`, () => {
        signUpStep.fillTheForm(userWithValidDate);
    })

    it.only(`Fill the form with ${userBlankFirstName.scenario}`, () => {
        signUpStep.test(userWithValidDate);
    })

    // it.only('Test', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://localhost:3001/login',
    //         body: {
    //             type: 'LOGIN',
    //             username: "Katharina_Bernier",
    //             password: "s3cret"
    //         }
    //     }).then((res) => {
    //         expect(res.status).to.equal(200)
    //     })
    // })
})
