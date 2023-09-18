import HomePage from '../pages/home.page.js';
import ResultsPage from '../pages/results.page.js';
import { createDriver, destroyDriver } from '../../conf/drivers.js';
import { getTemperature } from '../services/weatherApi.js';
import { logger } from '../utils/logger.js';
import { saveScreenShot } from '../utils/screenshot.js';

let driver;

describe('Search', function () {
    const city = 'San Francisco, California';

    before(async function () {
        driver = await createDriver();
    });

    afterEach(async function () {
        await saveScreenShot(this);
    });

    after(async function () {
        await destroyDriver(driver);
    });

    it(`Search ${city} weather`, async function () {
        const homePage = new HomePage(driver);
        const resultsPage = new ResultsPage(driver);

        await driver.get('https://www.google.com');
        await homePage.searchInGoogle(`weather in ${city}`);
        const uiTemperature = await (await resultsPage.weatherWidgetTemp).getText();
        const {
            main: { temp },
        } = await getTemperature(city);

        logger.info((uiTemperature - temp).toFixed(2));
    });
});
