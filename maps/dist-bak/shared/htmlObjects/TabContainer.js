import { getUniqueID } from "./HtmlObjectHelper.js";
export class TabContainer {
    constructor() {
        this.tabs = [];
        this.id = getUniqueID();
        this.getHtml = () => {
            let nav = $("<nav></nav>");
            let htmlHeader = $("<div class='nav nav-tabs'></div>");
            htmlHeader.attr("role", "tablist");
            let htmlContent = $("<div class='tab-content'></div>");
            //alert(this.tabs[0].getHtmlContent().html())
            this.makeTabsValid(true);
            this.tabs.forEach((tab) => {
                htmlHeader.append(tab.getHtmlHeader);
                htmlContent.append(tab.getHtmlContent);
            });
            nav.append(htmlHeader);
            return $("<div></div>").append(nav).append(htmlContent);
        };
        this.addTab = (tab) => {
            this.tabs.push(tab);
        };
        this.makeTabActive = (tab) => {
            if (this.tabs.indexOf(tab) == -1) {
                return;
            }
            let activeIndex = this.tabs.findIndex((tab) => {
                return tab.active;
            });
            this.tabs[activeIndex].makeTabInactive();
            tab.makeTabActive();
        };
        this.makeNextTabActive = () => {
            let activeIndex = this.tabs.findIndex((tab) => {
                return tab.active;
            });
            this.tabs[activeIndex].makeTabInactive();
            this.tabs[(activeIndex + 1) % this.tabs.length].makeTabActive();
        };
        this.makeNextDomTabActive = () => {
            let activeIndex = this.tabs.findIndex((tab) => {
                return tab.active;
            });
            this.tabs[activeIndex].makeTabDomElementInactive();
            this.tabs[(activeIndex + 1) % this.tabs.length].makeTabDomElementActive();
        };
        this.makeTabsValid = (oneTabMustBeActive = false) => {
            let tabActiveCounter = 0;
            this.tabs.forEach((tab) => {
                if (tab.active) {
                    tabActiveCounter++;
                    if (tabActiveCounter > 1) {
                        tab.makeTabInactive();
                        tabActiveCounter--;
                    }
                }
            });
            if (oneTabMustBeActive && tabActiveCounter == 0) {
                this.tabs[0].makeTabActive();
            }
        };
        this.getActiveTab = () => this.tabs.find((tab) => {
            return tab.active;
        });
    }
}
//# sourceMappingURL=TabContainer.js.map