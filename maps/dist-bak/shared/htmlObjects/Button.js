import { getUniqueID } from "./HtmlObjectHelper.js";
export class Button {
    constructor(name, onClickFunction) {
        this.id = getUniqueID();
        this.getHtml = () => {
            let buttonHtml = $("<button type='button' id='" + this.id + "' class='btn btn-primary'>" + this.name + "</button>");
            buttonHtml.on("click", this.onClickFunction);
            return buttonHtml;
        };
        this.triggerButton = () => {
            $("#" + this.id).trigger("click");
        };
        this.name = name;
        this.onClickFunction = onClickFunction;
    }
}
//# sourceMappingURL=Button.js.map