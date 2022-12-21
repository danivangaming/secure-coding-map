"use strict";
$(function () {
    const layerName = $("#layerName").text();
    const body = $("body");
    document.addEventListener('mousedown', (e) => { e.preventDefault(); });
    WA.onInit().then(() => {
        WA.room.onEnterLayer(layerName).subscribe(() => {
            body.show("slow");
        });
        WA.room.onLeaveLayer(layerName).subscribe(() => {
            body.hide("slow");
        });
    });
});
//# sourceMappingURL=speechBubbleInit.js.map