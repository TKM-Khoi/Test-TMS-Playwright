import { expect } from '@playwright/test';
import { Element } from '../core/element/element'
export class ProfilePage {
    userPersonalInfo: Element;
    constructor() {
        this.userPersonalInfo = new Element('#personal-info');
    }
    async verifyStaffCode(staffCode?: string): Promise<void> {
        // await expect(page.locator('#personal-info')).toContainText('Staff code: BD69');
        await expect(this.userPersonalInfo.getElement()).toContainText(`Staff code: ${staffCode}`)
    }
}