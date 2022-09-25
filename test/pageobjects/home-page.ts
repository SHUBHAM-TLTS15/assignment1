import { HighlightSpanKind, IndexInfo } from 'typescript';
import { ChainablePromiseElement } from 'webdriverio';
import { TIMEOUT } from '../constants/constants';
import logs from '../utils/logs';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    baseUrl = "https://www.360logica.com";

    get ribbonTabs() {
        return ['Solutions', 'Frameworks', 'Resources', 'About Us', 'Contact', 'Saksoft Group'];
    };

    //locators

    get homePageText() {
        return $("h1.title-anim");
    };

    ribbonItems(menuName: string) {
        return $("//ul[@id='menu-main-menu']//span[text()='" + menuName + "']");
    };

    ribbonSubItems(subMenuName: string){
        return $("//a/span[contains(text(),'"+ subMenuName + "')]");
    }

    get slideBar() {
        return $(".fusion-icon-sliding-bar");
    }
    get xCloseBtn() {
        return $("a.fusion-sb-close");
    }



    //Actions


    // async verifyHomePage(timeout = TIMEOUT.S) {
    //     //  await (await (this.homePageText)).waitForDisplayed;
    //     //  await expect(await (browser.getUrl)).toHaveUrl(this.baseUrl);

    // };
    async mainMenuItems(timeout = TIMEOUT.S) {
        for (let i = 0; i < this.ribbonTabs.length; i++) {
            await expect((await this.ribbonItems(this.ribbonTabs[i])).waitForClickable).toBeDisplayed;
            logs.addLog("Verified menu item: "+ await(this.ribbonTabs[i]) + " is displayed.");
            await (await this.ribbonItems(this.ribbonTabs[i])).click();
            logs.addLog("Verified menu item: "+ await(this.ribbonTabs[i]) + " is clicked.");
            await browser.pause(TIMEOUT.XXS);
        }
    };
    async subMenuItems() {
       
    };

    async verifySlidingBar(timeout = TIMEOUT.S) {
        (await this.slideBar).waitForClickable;
        this.slideBar.click();
        logs.addLog("Verified sliding bar is displayed and clicked.");

        (await (this.xCloseBtn)).waitForClickable;
        await browser.pause(TIMEOUT.XXS);
        //  await expect(this.xCloseBtn).toBeClickable();
        await (await this.xCloseBtn).click();
        logs.addLog("Verified X close button is displayed and clicked.");
    };
    async open() {
        return browser.url('');
    };


}

export default new HomePage();
