import { HeaderComponent } from './page-obj/header.po';
describe('Header', () => {
  let page: HeaderComponent;
  beforeEach(() => {
    page = new HeaderComponent();
  });
it('Contains header title Worldpress',()=>{
    page.navigateToHeader();
    expect(page.getHeaderTitle()).toBeTruthy();
})
it('Routing links',()=>{
    page.navigateToHeader();
    expect(page.getHeaderDashboard()).toBeTruthy();
})
 /*it('Display all Menu in Header',()=>{
    page.navigateToHeader();
    expect(page.getHeaderMenus()).toBeTruthy();
})
it('Button to Login and signup',()=>{
    page.navigateToHeader();
    expect(page.getHeaderLogin()).toBeTruthy();
}) */
})