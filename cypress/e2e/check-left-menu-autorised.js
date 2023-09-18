// <reference types="Cypress" />

import { GeneralSteps } from "../General_Steps/general_steps";
import { checkLeftMenuSteps } from "../Steps/check_left_menu_steps";


describe('Check the Left Menu', () => {
    beforeEach('Open the local App and autorised', () => {
      GeneralSteps.visitSignUpPage;
      checkLeftMenuSteps.loginOnTheSite();
    });

    it(`Open and hide the Left Menu`, () => {
      checkLeftMenuSteps.hideLeftMenu();
      checkLeftMenuSteps.makeVisibleLeftMenu();
    })

    it(`Check the visibility of the Account balance`, () => {
      checkLeftMenuSteps.checkAccountBalance();
    })

    it(`Check main buttons-links`, () => {
      checkLeftMenuSteps.checkHomeButton();
      checkLeftMenuSteps.checkMyAccountButton();
      checkLeftMenuSteps.checkBankAccountsButton();
      checkLeftMenuSteps.checkNotificationsButton();
    })
});