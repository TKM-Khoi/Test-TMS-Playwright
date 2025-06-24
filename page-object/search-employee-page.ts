import { expect, Locator } from '@playwright/test';
import { Element, LocatorType } from '../core/element/element'
import { BrowserManagement } from '../core/browser/browser-managment';

export class SearchEmployeePage{
    header: Element;
    userProfileUsername: Element;
    userProfileMenu: Element;
    userProfileOption: Element;

    constructor() {
        this.header=new Element("heading", LocatorType.ROLE);
        this.userProfileUsername = new Element('#navbar');
        this.userProfileMenu = new Element('button', LocatorType.ROLE, { name: 'profile-pic admin' })
        this.userProfileOption = new Element('link', LocatorType.ROLE, { name: 'Profile' });
    }

    async getHeader(): Promise<Locator>{
        return await this.header.getElement();
    }
    async verifyUsername(username: string, staffCode?: string): Promise<void>{
        // await expect(page.locator('#navbar')).toContainText('admin');
        await expect(this.userProfileUsername.getElement()).toContainText(username);
        
    }
    async gotoProfilePage(): Promise<void>{
        // await page.getByRole('button', { name: 'profile-pic admin' }).click();
        await this.userProfileMenu.clickAsync();
        // await BrowserManagement.getCurrentPage().getByRole('link', { name: 'Profile' }).click({timeout: 1000, delay: 500});
        await this.userProfileOption.clickAsync({timeout: 1000, delay: 500});
    }
}