import { WelcomePage } from './welcome.po';

describe('Search Case', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  it('should search for a case and navigate to application data', () => {
    page.navigateTo();
    expect(page.getTitle('welcome-page').isPresent()).toBe(true);
    page.inputCase('1234567890');
    page.search();
    expect(page.getTitle('application-data').isPresent()).toBe(true);
  });
});
