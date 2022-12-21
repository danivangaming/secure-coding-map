"use strict";
WA.onInit().then(() => {
    const elevatorSubscription = WA.room.onEnterLayer("zones/exit").subscribe(() => {
        WA.nav.goToRoom("../starter/map.json");
    });
});
//# sourceMappingURL=starter.js.map