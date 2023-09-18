import { Key } from 'selenium-webdriver';
import BasePage from './base.page.js';

class Home extends BasePage {
    get searchBar() {
        return this.findNameElement('q');
    }

    async searchInGoogle(searchTerm) {
        (await this.searchBar).sendKeys(searchTerm, Key.ENTER);
    }
}

export default Home;
