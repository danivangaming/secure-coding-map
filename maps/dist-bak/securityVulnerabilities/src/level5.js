import { elevator } from "../../shared/elevator/elevator.js";
import { TextFilesEnglish } from "../../shared/TextFiles/TextFilesEnglish.js";
let TextFiles = TextFilesEnglish;
let currentItem = undefined;
let currentTriggerMessage = undefined;
elevator.setMaxLevelAvailable(6);
WA.room.setProperty("exit", "exitUrl", "Level5.json");
elevator.setCurrentLevel("Level5.json");
WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
WA.room.onEnterLayer("interact_down").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelDown());
            WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
        },
    });
});
WA.room.onLeaveLayer("interact_down").subscribe(() => closeTriggerMessage());
WA.room.onEnterLayer("interact_up").subscribe(() => {
    currentTriggerMessage = WA.ui.displayActionMessage({
        message: TextFiles.elevator_interact_message,
        callback: () => {
            WA.room.setProperty("exit", "exitUrl", elevator.setLevelUp());
            if (elevator.getCurrentLevelJson() == "Lobby.json") {
                WA.room.setProperty("exit", "exitUrl", "http://play.workadventure.localhost/_/global/maps.workadventure.localhost/starter/map.json");
                WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevelJson().slice(0, 5), []);
            }
            else {
                WA.ui.openPopup("popUp_elevator", elevator.getCurrentLevel().toString(), []);
            }
        },
    });
});
WA.room.onLeaveLayer("interact_up").subscribe(() => closeTriggerMessage());
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
//# sourceMappingURL=level5.js.map