import { LeftMenuPageObject } from "../Pages_Object_Model/leftMenu_pageObject";
import { usersLeftMenu } from "../TestData/data_for_leftMenu";
import { GeneralSteps } from "../General_Steps/general_steps";


export class CheckLeftMenuSteps extends GeneralSteps{
    loginOnTheSite(){
      LeftMenuPageObject.getUserNameField.type(usersLeftMenu.user_name);
      LeftMenuPageObject.getPasswordField.type(usersLeftMenu.password);
      LeftMenuPageObject.getSignInButton.click();
    }

    hideLeftMenu(){
      LeftMenuPageObject.getIconMenuButtom.should('be.visible').click();
      LeftMenuPageObject.getAccountBalanceText.should(`not.be.visible`);
    }

    makeVisibleLeftMenu(){
      LeftMenuPageObject.getIconMenuButtom.should('be.visible').click();
      LeftMenuPageObject.getAccountBalanceText.should(`be.visible`);
    }

    checkAccountBalance(){
      LeftMenuPageObject.getAccountBalanceText.should(`be.visible`);
      LeftMenuPageObject.getAccountBalanceNumbers.invoke('text').then((text) => {
        const hasNumbers = /\d/.test(text);
        expect(hasNumbers).to.be.true;  //text contains numbers
      });
    }

    checkHomeButton(){
      LeftMenuPageObject.getHomeButton.should('contain.text', 'Home');
    }
      
    checkMyAccountButton(){
      LeftMenuPageObject.getMyAccountButton.should('contain.text', 'My Account');
    }
      
    checkBankAccountsButton(){
      LeftMenuPageObject.getBankAccountsButton.should('contain.text', 'Bank Accounts');
    }
      
    checkNotificationsButton(){
      LeftMenuPageObject.getNotificationsbutton.should('contain.text', 'Notifications');
    }
}

export const checkLeftMenuSteps = new CheckLeftMenuSteps;