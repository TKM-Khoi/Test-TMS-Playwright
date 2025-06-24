import { Locator, Page } from 'playwright'
import { BrowserManagement } from '../browser/browser-managment';
export enum LocatorType {
    ROLE = 0,
    TEXT,
    LABEL,
    PLACEHOLDER,
    ALT_TEXT,
    TITLE,
    TEST_ID,
    DEFAULT
}
interface ElementOptions {
    [key: string]: any;
}
export class Element {
    private page: Page;
    private locator: any;
    private locatorType: LocatorType;
    private options: ElementOptions;

    constructor(locator: string, locatorType: LocatorType = LocatorType.DEFAULT, options: ElementOptions = {}) {
        this.locator = locator;
        this.locatorType = locatorType;
        this.options = options;
    }

    getElement(): Locator {

        switch (this.locatorType) {
            case LocatorType.ROLE:
                return BrowserManagement.getCurrentPage().getByRole(this.locator, this.options);
            case LocatorType.TEXT:
                return BrowserManagement.getCurrentPage().getByText(this.locator, this.options);
            case LocatorType.LABEL:
                return BrowserManagement.getCurrentPage().getByLabel(this.locator, this.options);
            case LocatorType.PLACEHOLDER:
                return BrowserManagement.getCurrentPage().getByPlaceholder(this.locator, this.options);
            case LocatorType.ALT_TEXT:
                return BrowserManagement.getCurrentPage().getByAltText(this.locator, this.options);
            case LocatorType.TITLE:
                return BrowserManagement.getCurrentPage().getByTitle(this.locator, this.options);
            case LocatorType.TEST_ID:
                return BrowserManagement.getCurrentPage().getByTestId(this.locator);
            default:
                return BrowserManagement.getCurrentPage().locator(this.locator);
        }
    }
    async clickAsync(options: any = {timeout : 10000}) {
        await this.getElement().click(options);
    }

    async typeAsync(text: string) {
        await this.getElement().pressSequentially(text);
    }
    async waitForElementAsync(options: any) {
        await this.getElement().waitFor(options)
    }
    async waitForElementToBeVisibleAsync(timeout = 5000) {
        await this.waitForElementAsync({ state: "visible", timeout: timeout });
    }
    async waitForElementToBeHiddenAsync() {
        await this.waitForElementAsync({ state: "hidden" });
    }
    async isEnableAsync(): Promise<boolean> {
        return this.getElement().isEnabled();
    }
    async isVisibleAsync(): Promise<boolean> {
        return this.getElement().isVisible();
    }
    async fillTextAsync(text: string) {
        await this.getElement().fill(text)
    }
    async hoverAsync() {
        this.getElement().hover()
    }
    async getTextAsync(): Promise<string> {
        await this.waitForElementToBeVisibleAsync();
        return this.getElement().innerText();
    }
    async getInputValueAsync(): Promise<string> {
        await this.waitForElementToBeVisibleAsync();
        return this.getElement().inputValue();
    }
}