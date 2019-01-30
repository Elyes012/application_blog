import { UpdateArticle } from './updatearticle.po';
import { browser } from 'protractor';
describe('TEST Update Article', () => {
  let page: UpdateArticle;
  beforeEach(() => {
    page = new UpdateArticle();
    page.navigateTo();
  });
 // login and password valid and update article
 it('login and password valid and update article', () => {
  page.getEmailTextbox().sendKeys('za@gmail.com');
   page.getPasswordTextbox().sendKeys('12345678');
   const testBackend = '200';
   page.getSubmitButton().click();
   browser.pause();
   browser.sleep(2000);
   const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
   expect(backendLocalStorage).toEqual(testBackend);
   page.editArticleMenu().click();
   browser.sleep(7000);
   page.btnUpdateArticle().click();
   browser.sleep(7000);
   console.log('buton clicked updateeeeee');
   page.editTitleArticle().clear();
   browser.sleep(2000);
   page.editTitleArticle().sendKeys('Update article ');
   browser.sleep(2000);
   page.editContentArticle().clear();
   page.editContentArticle().sendKeys('Sony PlayStation VR 2 (MK3) à 199€Sony PlayStation VR 2 (MK3) à 199€Sony PlayStation VR 2 (MK3)');
   browser.sleep(2000);
   page.btnSaveChanges().click();
browser.refresh();
browser.sleep(7000);
 });

 // login and password valid and titel article invalid
 it('login and password valid and titel article invalid', () => {
  page.getEmailTextbox().sendKeys('za@gmail.com');
   page.getPasswordTextbox().sendKeys('12345678');
   const testBackend = '200';
   page.getSubmitButton().click();
   browser.pause();
   browser.sleep(2000);
   const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
   expect(backendLocalStorage).toEqual(testBackend);
   page.editArticleMenu().click();
   browser.sleep(7000);
   page.btnUpdateArticle().click();
   browser.sleep(7000);
   console.log('buton clicked updateeeeee');
   page.editTitleArticle().clear();
   browser.sleep(2000);
   page.editTitleArticle().sendKeys('LO');
   browser.sleep(2000);
   page.editContentArticle().clear();
   page.editContentArticle().sendKeys('Sony PlayStation VR 2 (MK3) à 199€Sony PlayStation VR 2 (MK3) à 199€Sony PlayStation VR 2 (MK3)');
   browser.sleep(2000);
browser.refresh();
browser.sleep(3000);
 });

  // login and password valid and content article invalid
  it('login and password valid and content article invalid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     browser.sleep(2000);
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     page.editArticleMenu().click();
     browser.sleep(7000);
     page.btnUpdateArticle().click();
     browser.sleep(7000);
     console.log('buton clicked updateeeeee');
     page.editTitleArticle().clear();
     browser.sleep(2000);
     page.editTitleArticle().sendKeys('yes update');
     browser.sleep(2000);
     page.editContentArticle().clear();
     page.editContentArticle().sendKeys('AA');
     browser.sleep(2000);
  browser.refresh();
  browser.sleep(5000);
   });
  });
