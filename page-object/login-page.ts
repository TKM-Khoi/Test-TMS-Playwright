import { Element, LocatorType } from '../core/element/element'

export class LoginPage {
  loginButton: Element;
  userNameTextBox: Element;
  userNameWarningMsg: Element;
  passwordTextBox: Element;
  passwordWarningMsg: Element;
  wrongCredentialsWarningMsg: Element;


  constructor() {
    this.loginButton=new Element("xpath=//input[@value='Login']");
    // this.loginButton = new Element('button', LocatorType.ROLE, { name: 'Login' })

    this.userNameTextBox = new Element('textbox', LocatorType.ROLE, { name: 'User name* : Password* :' });
    
    this.userNameWarningMsg = new Element("xpath=//input[@id='username']/../div[contains(@class,'message-error')]/p");
    
    this.passwordTextBox = new Element("id=password");
    // this.passwordTextBox = new Element("#password");
    
    this.passwordWarningMsg = new Element("xpath=//input[@id='password']/../div[contains(@class,'message-error')]/p");
    
    this.wrongCredentialsWarningMsg = new Element("xpath=//form//div[contains(@class,'alert')]");
    // this.wrongCredentialsWarningMsg = new Element("//form//div[contains(@class,'alert')]");
  }

  async login(username: string, password: string): Promise<void> {
    await this.passwordTextBox.fillTextAsync(password);
    await this.userNameTextBox.fillTextAsync(username);

    await this.loginButton.clickAsync()
  }
  async getMissingUsernameWarning(): Promise<string> {
    return await this.userNameWarningMsg.getTextAsync();
  }
  async getMissingPasswordWarning(): Promise<string> {
    return await this.passwordWarningMsg.getTextAsync();
  }
  async getWrongCredentialsWarning(): Promise<string> {
    const text = await this.wrongCredentialsWarningMsg.getTextAsync();
    return text;
  }
}