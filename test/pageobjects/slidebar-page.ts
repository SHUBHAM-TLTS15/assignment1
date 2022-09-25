import { ChainablePromiseElement } from 'webdriverio';
import { TIMEOUT } from '../constants/constants';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SlidingBar extends Page {
   
     //locator


     async formFieldLocator(fieldName: string, timeout=TIMEOUT.XS){
        return $("[data-form-id='355'] > #" + fieldName);
    }
    
    async btnText(timeout=TIMEOUT.XS){
        return $("button.button-7>span.fusion-button-text");
        //*[@data-form-id='355']/span[text()='Send message']
    }
    
    

//actions

/**
    * 
    * @param fieldName
    * @param enterName  
    */
    async formFieldName(fieldName: string, enterName: string, timeout=TIMEOUT.S){
        await expect(await this.formFieldLocator(fieldName)).toBeDisplayed;
        await expect(await this.formFieldLocator(fieldName)).toBeClickable;
        await (await this.formFieldLocator(fieldName)).clearValue();
        await (await this.formFieldLocator(fieldName)).addValue(enterName);
    }

    /**
    * @param formId
    * @param buttonName
    * @param index  
    */
    async buttonByText(buttonName: string, index?: number, timeout=TIMEOUT.S){
        await (await (this.btnText())).waitForClickable();
        // await browser.pause(TIMEOUT.XS);
        // (await (this.btnText(buttonName,index))).click();
    }
    async open () {
        return super.open('');
    }

}

export default new SlidingBar();
