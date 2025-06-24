import {Page} from 'playwright'
import {BrowserManagement} from './browser-managment'

export class BrowserContextUtils{
    static getAllPages():Array<Page>{
        return BrowserManagement.getCurrentContext().pages();
    }
}