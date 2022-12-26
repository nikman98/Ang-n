import { browser, by, element, ElementFinder, promise, ElementArrayFinder } from 'protractor';
export class DashboardViewPage {
  // navigate to dashboard view page
  navigateToDashboardView() {
    return browser.get('/srchdisp');
  }
  // to pause browser
  pauseBrowser(port) {
    browser.pause(port);
  }
  //to get search bar
  getSearchToolbar():ElementFinder
  {
    return element(by.className('mat-toolbar'));
  }
  //to get card container in dashboard
  getCardContainer():ElementFinder{
    return element(by.className('container'));
  }
  getBookmarkButton():ElementFinder{
    return element(by.className('text-box'));
  }
 
}