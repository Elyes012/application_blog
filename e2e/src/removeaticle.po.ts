import { browser, by, element } from 'protractor';

export class RemoveArticle {
  navigateTo() {
    return browser.get('/login');
  }
  getEmailTextbox() {
    return element(by.name('email'));
  }
  getPasswordTextbox() {
    return element(by.name('password'));
  }

  getForm() {
    return element(by.css('#loginForm'));
  }
  getSubmitButton() {
    return element(by.css('#btnSubmit'));
  }
  removeButton() {
    return element(by.css('#btndelete'));
  }
  editArticleMenu() {
    return element(by.css('#btneditarticle'));
  }
}
