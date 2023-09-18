import addContext from 'mochawesome/addContext.js';

export const saveScreenShot = async (runner) => {
    if (runner.currentTest.state !== 'passed') {
        try {
            await addContext(runner, `data:image/png;base64, ${await driver.takeScreenshot()}`);
        } catch (error) {
            throw new Error(`>>>> ERROR AT SCREENSHOT <<<<\n${error}`);
        }
    }
    return null;
};
