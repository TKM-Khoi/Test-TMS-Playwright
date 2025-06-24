import { test } from "playwright/test";
import { BrowserManagement } from './browser-managment'

export class BrowserUtils {
    static async navigate(url: string) {
        await BrowserManagement.getCurrentPage().goto(url);
    }

}