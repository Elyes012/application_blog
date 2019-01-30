import { browser, by, element } from 'protractor';

export class UpdateArticle {
    navigateTo() {
        return browser.get('/login');
    }
    btnSaveChanges() {
      return element(by.css('#btnSaveChanges'));
    }
    btnUpdateArticle() {
      return element(by.css('#btnupdate'));
    }
    btndeleteArticle() {
      return element(by.css('#btndelete'));
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
    editTitleArticle() {
      return element(by.css('#updateTitleArticle'));
    }
    editContentArticle() {
      return element(by.css('#updateContentArticle'));
    }
    editArticleMenu() {
      return element(by.css('#btneditarticle'));
    }
  }

