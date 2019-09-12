import { browser, by, element } from 'protractor';
import { Title } from '@angular/platform-browser';

export class WelcomePage {
    public navigateTo() {
        browser.get('/');
    }
    public getTitle(page: String) {
        browser.waitForAngularEnabled(true);
        return element(by.css('div[data-qa-page=' + page + ']'));
    }
    public inputCase(caseId: string) {
       element(by.css('input[data-qa=caseSearch]')).sendKeys(caseId);
    }
    public search() {
        element(by.css('input[data-qa=submit]')).submit();
    }

}
