import homePage from '../pageobjects/home-page';
import logs from '../utils/logs';

describe('360logica homePage test suite', async () => {

    beforeEach( async () => {
        await homePage.open();
        logs.addLog("Verified: www.360logica.com is displayed.");
    });
   //  it("Verify welcome page text", async () => {
   //     await homePage.verifyHomePage();
   //  });
    it("Verify main menu items displayed", async () => {
       await homePage.mainMenuItems();
    });
    it("Verify sliding bar displayed", async () => {
       await homePage.verifySlidingBar();
    });
    
    // it("Verify sub menu is displayed", async () => {
    
    // });

});


