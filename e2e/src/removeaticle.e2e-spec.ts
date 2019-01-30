import { RemoveArticle } from './removeaticle.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  let page: RemoveArticle;

  beforeEach(() => {
    page = new RemoveArticle();
    page.navigateTo();
  });

  it('remove article', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     console.log('buton clicked');
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     page.editArticleMenu().click();
     browser.sleep(4000);
    page.removeButton().click();
    browser.refresh();
     browser.sleep(4000);
   });

});
