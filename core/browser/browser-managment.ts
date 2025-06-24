import {Browser, BrowserContext, Page, APIRequestContext as RequestContext} from 'playwright'

export class BrowserManagement{
    private static browser: Browser;
    private static browserContext: BrowserContext;
    private static page: Page;
    private static request: RequestContext;

    public static initializeBrowser(browser: Browser, browserContext: BrowserContext, page: Page, request:RequestContext): void{
        BrowserManagement.browser = browser;
        BrowserManagement.browserContext = browserContext;
        BrowserManagement.page = page;
        request = request;
    }
   public static getCurrentPage(): Page{
        return BrowserManagement.page;
    }
   public static getCurrentContext(): BrowserContext{
        return BrowserManagement.browserContext;
    }
   public static setCurrentBroser(browser: Browser): void{
        BrowserManagement.browser = browser;
    }
   public static setCurrentBrowserContex(browserContext: BrowserContext): void{
        BrowserManagement.browserContext = browserContext;
    }
   public static setCurrentPage(page: Page): void{
        BrowserManagement.page = page;
    }
   public static setCurrentRequest(request: RequestContext): void{
        request = request;
    }
   public static async switchToTab(index: number): Promise<void>{
        await this.browserContext.waitForEvent('page', {timeout:30000});
        const allPages = this.browserContext.pages();
        if(index<0||index-1>=allPages.length){
            throw new Error(`Tab index ${index} is out of range. There are only ${allPages.length} open tabs.`)
        }
    }
}