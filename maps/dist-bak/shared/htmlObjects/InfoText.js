import { getUniqueID } from "./HtmlObjectHelper.js";
export class InfoText {
    constructor(text, headerText = "Info", border = false, overHeaderText = "") {
        this.id = getUniqueID();
        this.text = text;
        this.border = border;
        this.headerText = headerText;
        this.overHeaderText = overHeaderText;
    }
    getHtml() {
        let container = $("<div></div>");
        container.addClass("container");
        let column = $("<div></div>");
        column.addClass("col-lg-6");
        let fieldset = $("<fieldset></fieldset>");
        if (this.border) {
            fieldset.addClass("border");
        }
        let legend = $("<legend></legend>");
        legend.addClass("text-center");
        legend.text(this.headerText);
        let legend2 = $("<legend></legend>");
        legend2.addClass("text-center");
        legend2.text(this.overHeaderText);
        let element = $("<p></p>");
        element.addClass("text-break").addClass("text-center");
        element.attr("id", this.id);
        element.append(this.text);
        fieldset.append(legend2);
        fieldset.append(legend);
        fieldset.append(element);
        column.append(fieldset);
        container.append(column);
        return container;
    }
}
//# sourceMappingURL=InfoText.js.map