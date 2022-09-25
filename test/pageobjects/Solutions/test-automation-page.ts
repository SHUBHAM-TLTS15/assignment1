import basePage from "../basePage";

class TestAutomation extends basePage{

    public open() {
        return super.open('test-automation');
    }
    
    }
    
    export default new TestAutomation();