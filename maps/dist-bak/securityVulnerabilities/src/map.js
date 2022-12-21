import { elevator } from "../../shared/elevator/elevator.js";
import { TextFilesEnglish } from "../../shared/TextFiles/TextFilesEnglish.js";
WA.onInit().then(() => {
    const elevatorSubscription = WA.room.onEnterLayer("exitPoint").subscribe(() => {
        WA.nav.goToRoom("../starter/map.json");
    });
});
let TextFiles = TextFilesEnglish;
let currentItem = undefined;
let currentTriggerMessage = undefined;
WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
WA.room.onEnterLayer("Interact_remote_Down").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelDown());
            WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
        },
    });
});
WA.room.onLeaveLayer("Interact_remote_Down").subscribe(() => {
    closeTriggerMessage();
});
WA.room.onEnterLayer("Interact_remote_Up").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelUp());
            WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
        },
    });
});
WA.room.onLeaveLayer("Interact_remote_Up").subscribe(() => {
    closeTriggerMessage();
});
function closeItem() {
    if (currentItem !== undefined) {
        currentItem.close();
        currentItem = undefined;
    }
}
function closeTriggerMessage() {
    if (currentTriggerMessage !== undefined) {
        currentTriggerMessage.remove();
        currentTriggerMessage = undefined;
    }
}
//# sourceMappingURL=map.js.map