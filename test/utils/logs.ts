import AllureReporter from "@wdio/allure-reporter";

class Logs {

    async addLog(message: string){
        AllureReporter.addStep(`TEST: ${message}`);
    }
}

export default new Logs();