import { RegisterPage } from './register.po';
import { browser } from 'protractor';
describe('TEST Register', () => {
  let page: RegisterPage;
  beforeEach(() => {
    page = new RegisterPage();
    page.navigateTo();
  });

  it('all input valid', () => {
    page.getNameTextbox().sendKeys('elyes');
    page.getLastnameTextbox().sendKeys('maamouri');
    page.getEmailTextbox().sendKeys('elyes@gmail.com');
    page.getPasswordTextbox().sendKeys('12345678');
      page.getSubmitButton().click();
      console.log('buton clicked');
      browser.sleep(5000);
    });

    it('all input invalid', () => {
      page.getNameTextbox().sendKeys('aze');
      page.getLastnameTextbox().sendKeys('aze');
      page.getEmailTextbox().sendKeys('elye');
      page.getPasswordTextbox().sendKeys('1234');
      browser.sleep(5000);
        page.getSubmitButton().click();
        console.log('buton clicked');
        browser.pause();
      });

      it('invalid email', () => {
        page.getNameTextbox().sendKeys('haythem');
        page.getLastnameTextbox().sendKeys('haythem');
        page.getEmailTextbox().sendKeys('haythem@gmail.');
        page.getPasswordTextbox().sendKeys('d2d5d8a6d5');
        browser.sleep(5000);
          page.getSubmitButton().click();
          console.log('buton clicked');
          browser.pause();
        });

        it('invalid password', () => {
          page.getNameTextbox().sendKeys('elyes');
          page.getLastnameTextbox().sendKeys('haythem');
          page.getEmailTextbox().sendKeys('haythem@gmail.com');
          page.getPasswordTextbox().sendKeys('1234567');
          browser.sleep(5000);
            page.getSubmitButton().click();
            console.log('buton clicked');
            browser.pause();
          });


          it('invalid name', () => {
            page.getNameTextbox().sendKeys('ely');
            page.getLastnameTextbox().sendKeys('haythem');
            page.getEmailTextbox().sendKeys('haythem@gmail.com');
            page.getPasswordTextbox().sendKeys('12345678');
            browser.sleep(5000);
              page.getSubmitButton().click();
              console.log('buton clicked');
              browser.pause();
            });



            it('invalid lastname', () => {
              page.getNameTextbox().sendKeys('elyes');
              page.getLastnameTextbox().sendKeys('aa');
              page.getEmailTextbox().sendKeys('haythem@gmail.com');
              page.getPasswordTextbox().sendKeys('12345678');
              browser.sleep(5000);
                page.getSubmitButton().click();
                console.log('buton clicked');
                browser.pause();
              });
});

