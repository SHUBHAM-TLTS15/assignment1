import { TIMEOUT } from '../constants/constants';
import homePage from '../pageobjects/home-page';
import slidebarPage from '../pageobjects/slidebar-page';
import logs from '../utils/logs';

describe("Verify sliding bar element and actions", async () => {

    beforeEach(async () => {
        await homePage.open();
        logs.addLog("Verified: www.360logica.com is displayed.");
    });

    it("Verify sliding bar is displayed", async () => {
        await homePage.verifySlidingBar();
        await (await homePage.slideBar).click();
        await slidebarPage.formFieldName('name', 'demo_name');
        await slidebarPage.formFieldName('email_address', 'abc@email.com');
        await slidebarPage.formFieldName('phone', '1234567890');
        await slidebarPage.formFieldName('website', 'www.demowebsite.com');
        await slidebarPage.formFieldName('message', 'Your demo text here');
        await slidebarPage.buttonByText("Send message");
        await browser.pause(TIMEOUT.XS);
        // slidingbar.buttonByText('Send message',2);

    });

});