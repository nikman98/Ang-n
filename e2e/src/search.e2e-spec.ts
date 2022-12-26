import { DashboardViewPage } from './page-obj/dashboard.po';
describe('Search page', () => {
  let page: DashboardViewPage;
  beforeEach(() => {
    page = new DashboardViewPage();
  });
  it('Search Should have a title', ()=>{
    page.navigateToDashboardView();
    expect(page.getSearchToolbar()).toBeTruthy();
  })
  it('Search Should have a container', ()=>{
    page.navigateToDashboardView();
    expect(page.getCardContainer()).toBeTruthy();
  })
  it('Search Should have a description for News', ()=>{
    page.navigateToDashboardView();
    expect(page.getBookmarkButton()).toBeTruthy();
  })
  /* it('should render take a note card', () => {
    page.navigateToDashboardView();
    expect(page.isNotePanelPresent()).toBeTruthy('<mat-expansion-panel> should exist');
    expect(page.isNotePanelTitlePresent()).toBeTruthy('<mat-panel-title> should exist');
    page.getNotePanel().click();
    expect(page.getNotePanelTitleText()).toEqual('Take a note',
      '<mat-panel-title> should look like <mat-panel-title>Take a note</mat-panel-title>');
    expect(page.isTitleInputBoxPresent()).toBeTruthy('Title input box should exist with name attribute as title');
    expect(page.isTextInputBoxPresent()).toBeTruthy('Text input box should exist with name attribute as text');
    expect(page.isDoneButtonPresent()).toBeTruthy('Done button exists with Done text');
  }); */
  /* it('should create a note', () => {
    page.navigateToDashboardView();
    page.getNotePanel().click();
    expect(page.getNotePanelDefaultValues()).toEqual(emptyNoteValues, 'Default values for title and text should be empty');
    const newNoteValues = page.addNoteValues();
    expect(page.getNotePanelDefaultValues()).toEqual(newNoteValues, 'Should be able to set values for note title and text');
    page.clickDoneButton();
  }); */
});