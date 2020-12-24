const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/careers';
    }
    open() {
        return super.open(this.url);
    }

    getLocationDropDown() {
        return new Element('Get location arrow', 'span.select2-selection__arrow');
    }
    acceptCookie() {
        return new Element ('Click Accept Cookie', 'button.cookie-disclaimer__button');
    }
    selectLocation(location) {
        return new Element('Select location', `//li[text()='${location}']`, true).click();
    }
    getSkills() {
        return new Element('Expand Skills drop-down', `div.selected-params`);
    }
    getYoungSpecialist() {
        return new Element('Select Young Specialist', '//span[contains(text(), \'Young Specialists\')]', true)
    }

    getElement() {
        return new Collection('Get results', 'ul.selected-items li[data-value=\'Young Specialists\']');
    }

}

module.exports = CareersPage;