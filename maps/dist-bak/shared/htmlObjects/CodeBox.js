import { getUniqueID } from "./HtmlObjectHelper.js";
export class CodeBox {
    constructor(code, language = "javascript") {
        this.id = getUniqueID();
        this.getHtml = () => {
            let codeElement = $("<pre class='prettyprint linenums'></pre>");
            codeElement.append(Prism.highlight(this.code, Prism.languages[this.language]));
            return codeElement;
        };
        this.code = code;
        this.language = language;
    }
}
//# sourceMappingURL=CodeBox.js.map