import { PostComment } from './postcomment.po';
import {browser} from 'protractor';

describe('Test Comment', () => {
  let page: PostComment;

  beforeEach(() => {
    page = new PostComment();
    page.navigateTo();
  });

  it('post comment valid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     browser.sleep(2000);
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     browser.pause();
     browser.sleep(2000);
     page.readMore().click();
     console.log('click read more');
     page.getTextComment().sendKeys('New comment');
page.submitComment().click();
browser.sleep(5000);
   });
   it('post comment invalid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     browser.sleep(2000);
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     page.readMore().click();
     page.getTextComment().sendKeys('Net');
page.submitComment().click();
browser.sleep(5000);
   });
});
