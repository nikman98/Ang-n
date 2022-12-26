import { browser, by, element, ElementFinder, promise } from 'protractor';
export class HeaderComponent {
    // navigate to register page
    navigateToHeader() {
      return browser.get('/');
    }
    // get current URL
    getCurrentURL() {
      return browser.getCurrentUrl();
    }
    //get header title 
    getHeaderTitle() :ElementFinder{
        return element(by.className('placeapp'));
    }
    //get header menus dashboard
    getHeaderDashboard() : ElementFinder{
        return element(by.className('navbar-header'));
    }
    /*//get header menus
    getHeaderMenus(): ElementFinder{
        return element(by.class('nav navbar-nav'));
    }
    //get login and sign up button
    getHeaderLogin(): ElementFinder{
        return element(by.class('btnsubmit'));
    } */
}