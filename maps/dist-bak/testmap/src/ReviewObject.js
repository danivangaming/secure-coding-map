export class ReviewObject {
    constructor() {
        this.tabCount = 0;
        this.reviewHtmlHeader = $("<ul class='nav nav-tabs'></ul>");
        this.reviewHtmlContent = $("<div class='tab-content'></div>");
    }
    addButton(tabElement, name, onClick) {
        let button = $("<button type='button' class='btn btn-primary'>" + name + "</button>");
        button.on("click", onClick);
        tabElement.append(button);
    }
    createElement(active, code, language = "javascript") {
        ++this.tabCount;
        let id = this.getUniqueID();
        if (active) {
            this.reviewHtmlHeader.append("<li class='active'>" +
                "<a href='#tab" + id + "'  data-toggle='tab'>Tab " + this.tabCount + "</a></li>");
        }
        else {
            this.reviewHtmlHeader.append("<li>" +
                "<a href='#tab" + id + "' data-toggle='tab'>Tab " + this.tabCount + "</a></li>");
        }
        let tabElement = $("<div class='tab-pane' id='tab" + id + "'></div>");
        if (active) {
            tabElement = $("<div  class='tab-pane active' id='tab" + id + "'></div>");
        }
        let codeElement = $("<pre class='prettyprint linenums'></pre>");
        //codeElement.css("background-color", "#0f0f0f")
        codeElement.append(Prism.highlight(code, Prism.languages[language]));
        tabElement.append(codeElement);
        //this.tabElements.push(tabElement)
        this.reviewHtmlContent.append(tabElement);
        return tabElement;
    }
    getHtml() {
        return $("<div></div>").append(this.reviewHtmlHeader).append(this.reviewHtmlContent);
    }
    getUniqueID() {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    ;
}
//# sourceMappingURL=ReviewObject.js.map