import { browser, by, element } from 'protractor';

export class RegisterPage {
    navigateTo() {
        return browser.get('/register');
    }

    getNameTextbox() {
      return element(by.name('name'));
     }
     getLastnameTextbox() {
      return element(by.name('lastname'));
     }

     getEmailTextbox() {
      return element(by.name('email'));
     }

     getPasswordTextbox() {
      return element(by.name('password'));
     }
     getForm() {
      return element(by.css('#registerForm'));
  }
  getSubmitButton() {
    return element(by.css('#submitRegister'));
   }
   getLogoutButton() {
     return element(by.css('#btnlogout'));
   }
}

