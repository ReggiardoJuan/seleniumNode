import { Builder, Browser } from 'selenium-webdriver';
import { logger } from '../src/utils/logger.js';

export const createDriver = async function (browser = Browser.FIREFOX) {
    const availableBrowsers = {
        firefox: async () => await geckoDriver(),
        chrome: async () => await chromeDriver(),
    };

    const driver = await availableBrowsers[browser]();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 2000, pageLoad: 10000, script: 10000 });

    return driver;
};

export const destroyDriver = async (driver) => {
    if (driver !== undefined && driver !== null) {
        try {
            await driver.quit();
            logger.info('Driver destroyed');
        } catch (error) {
            logger.info('Error destroying driver: ' + error);
        }
    } else {
        logger.info('Driver already null, nothing to destroy');
    }
};

// Enables capabilities extention per driver later on if needed
const geckoDriver = async function () {
    return new Builder().forBrowser(Browser.FIREFOX).build();
};

const chromeDriver = async function () {
    return new Builder().forBrowser(Browser.CHROME).build();
};
