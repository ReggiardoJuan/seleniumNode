import { By, until } from 'selenium-webdriver';
import { waits } from '../constants/constants.js';

class BasePage {
    constructor(driver) {
        this.wait = waits;
        this.driver = driver;
    }

    /**
     *   @param { By element }
     *   @param { String timeout }
     */
    async waitForElementToBeDisplayed(element, timeout = this.wait.display) {
        return this.driver.wait(
            until.elementLocated(element),
            timeout,
            `Timed out after ${timeout / 1000} seconds`,
            2000
        );
    }

    // Navigation
    async goTo(url) {
        await this.driver.get(url);
    }
    // Locators getters
    async findIdElement(locator) {
        return this.waitForElementToBeDisplayed(By.id(locator));
    }

    async findCssElement(locator) {
        return this.waitForElementToBeDisplayed(By.css(locator));
    }

    async findNameElement(locator) {
        return this.waitForElementToBeDisplayed(By.name(locator));
    }

    async isElementDisplayed(element, timeout = this.wait.display) {
        try {
            await this.waitForElementToBeDisplayed(element, timeout);
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default BasePage;
