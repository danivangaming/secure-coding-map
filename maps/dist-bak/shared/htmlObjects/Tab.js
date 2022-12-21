import { getUniqueID } from "./HtmlObjectHelper.js";
export class Tab {
    constructor(tabName) {
        this.self = this;
        this.id = getUniqueID();
        this.active = false;
        this.tabContents = [];
        this.changeName = (tabName) => { this.tabName = tabName; };
        this.makeTabActive = () => {
            this.active = true;
        };
        this.makeTabInactive = () => {
            this.active = false;
        };
        this.makeTabDomElementInactive = () => {
            this.makeTabInactive();
            let tabElement = $("#tab-" + this.id);
            tabElement.removeClass("active");
            tabElement.attr("aria-selected", "false");
            $("#" + this.id).removeClass("active");
        };
        this.makeTabDomElementActive = () => {
            this.makeTabActive();
            let tabElement = $("#tab-" + this.id);
            tabElement.addClass("active");
            tabElement.addClass("BLABLABLA");
            tabElement.attr("aria-selected", "true");
            $("#" + this.id).addClass("active");
        };
        this.addTabContent = (identifier, element) => {
            this.tabContents.push({ identifier: identifier, element: element });
        };
        this.removeTabContentByElement = (element) => {
            this.tabContents.filter((tabContent) => {
                return tabContent.element.id != element.id;
            });
        };
        this.getTabContentsByIdentifier = (identifier) => {
            return this.tabContents.filter((tabContent) => {
                return tabContent.identifier == identifier;
            }).map((tabContent) => {
                return tabContent.element;
            });
        };
        /*getHtmlContent = (): JQuery => {
            let htmlContent: JQuery
    
            if (this.active) {
                htmlContent = $("<div  class='tab-pane active' id='tab" + this.id + "'></div>")
            } else {
                htmlContent = $("<div  class='tab-pane' id='tab" + this.id + "'></div>")
            }
    
    
            this.tabContents.forEach((tabContent) => {
                htmlContent.append(tabContent.element.getHtml())
            })
            return htmlContent
    
        };*/
        this.getHtmlContent = () => {
            let navContent = $("<div></div>");
            navContent.addClass("tab-pane fade show");
            navContent.attr("id", this.id);
            navContent.attr("role", "tabpanel");
            navContent.attr("aria-labelledby", "tab-" + this.id);
            if (this.active) {
                navContent.addClass("active");
            }
            this.tabContents.forEach((tabContent) => {
                navContent.append(tabContent.element.getHtml());
            });
            return navContent;
        };
        this.getHtmlHeader = () => {
            let navButton = $("<button></button>");
            navButton.addClass("nav-link");
            navButton.attr("id", "tab-" + this.id);
            navButton.attr("data-bs-toggle", "tab");
            navButton.attr("data-bs-target", "#" + this.id);
            navButton.attr("type", "button");
            navButton.attr("role", "tab");
            navButton.attr("aria-controls", this.id);
            navButton.attr("aria-selected", "false");
            navButton.text(this.tabName);
            if (this.active) {
                navButton.addClass("active");
                navButton.attr("aria-selected", "true");
            }
            return navButton;
        };
        this.tabName = tabName;
    }
}
//# sourceMappingURL=Tab.js.map