import { Key } from 'selenium-webdriver';
import BasePage from './base.page.js';

class ResultsPage extends BasePage {
    get searchBar() { return this.findIdElement('searchform'); };

    get resultsList() { return this.driver.findElements(By.css('#rso > div')); };

    get weatherWidgetTemp() { return this.findIdElement('wob_tm'); };

    async searchInGoogle(searchTerm) {
        (await this.searchBar).sendKeys(searchTerm, Key.ENTER);
        await driver.sleep(2000);
    }
};

export default ResultsPage;