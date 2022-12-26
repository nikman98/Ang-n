// import { RegisterPage } from './page-obj/register.po';
// describe('register page', () => {
//   let page: RegisterPage;
//   beforeEach(() => {
//     page = new RegisterPage();
//   });
//   it('should have a register form',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getForm()).toBeTruthy();
//   })
//   it('should have a usermail textbox',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getMailTextbox()).toBeTruthy();
//   })
//   it('should have a username textbox',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getNameTextBox()).toBeTruthy();
//   })
//   it('shouls have a field to enter password',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getPasswordTextbox()).toBeTruthy();
//   })
//   it('should have a register button',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getRegisterButton()).toBeTruthy();
//   })
//   it('should have error message if some information are wrong',()=>{
//       page.navigateToRegisterPage();
//       expect(page.getErrorLable()).toBeTruthy();
//   })
//   it('default values of username,password and mailid should be empty', () => {
//     const emptyLoginValues = ['', '',''];
//     page.navigateToRegisterPage();
//     expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, 'Default values for Mailid,username and password should be empty');
//   });
// });