import { browser, by, element } from 'protractor';

export class PostComment {
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
  getFormComments() {
    return element(by.css('#formaddcomment'));
  }
  getTextComment() {
    return element(by.css('#contentComment'));
  }
readMore() {
  return element(by.css('#btnreadmore'));
}
submitComment() {
  return element(by.css('#btncomment'));
}
}
