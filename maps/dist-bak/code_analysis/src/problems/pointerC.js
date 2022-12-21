import { CodeAnalysisObject } from "../CodeAnalysisObject.js";
$(function () {
    let codeContainer = $("#code-container");
    let codeAnalysisObject = new CodeAnalysisObject();
    codeAnalysisObject.createProblem(codeContainer, "clike", "#include <stdio.h>\n" +
        "\n" +
        "int main() {\n" +
        "\n" +
        "    int factor1=129;\n" +
        "    int factor2=212;\n" +
        "    int factor3=122;\n" +
        "    int sum1;\n" +
        "    int sum2;\n" +
        "\n" +
        "    int *ptr1;\n" +
        "    int *ptr2;\n" +
        "    int *ptr3;\n" +
        "\n" +
        "    ptr1=&\factor1;\n" +
        "    ptr2=&\factor2;\n" +
        "    ptr3=&\factor3;\n" +
        "\n" +
        "    sum1=*ptr1+*ptr2;\n" +
        "    free(ptr1);\n" +
        "    free(ptr2);\n" +
        "\n" +
        "    sum2=*ptr1+*ptr2+*ptr3;\n" +
        "\n" +
        "    return 0;\n" +
        "}\n", "pointer.c: (in function main)\n" +
        "pointer.c:23:11: Variable ptr1 used after being released\n" +
        "  Memory is used after it has been released (either by passing as an only param\n" +
        "  or assigning to an only global). (Use -usereleased to inhibit warning)\n" +
        "   pointer.c:20:10: Storage ptr1 released\n" +
        "pointer.c:23:17: Variable ptr2 used after being released\n" +
        "   pointer.c:21:10: Storage ptr2 released\n" +
        "\n" +
        "Finished checking --- 2 code warnings\n", [{ answer: "eins", isRight: true }, { answer: "zwei", isRight: false }, { answer: "drei", isRight: false }, { answer: "vier", isRight: false }], "Ist halt einfach richtig lol");
    codeContainer.append(codeAnalysisObject.getHtml());
});
//# sourceMappingURL=pointerC.js.map