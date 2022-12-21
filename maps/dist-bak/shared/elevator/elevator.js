export class Elevator {
    constructor() {
        this.currentLevel = 1;
        this.maxLevelAvailable = 2;
    }
    setLevelUp() {
        if (this.currentLevel + 1 <= this.maxLevelAvailable) {
            this.currentLevel += 1;
        }
        return Levels[this.currentLevel];
    }
    setLevelDown() {
        if (this.currentLevel - 1 > 0) {
            this.currentLevel -= 1;
        }
        return Levels[this.currentLevel];
    }
    increaseMaxLevelAvailable() {
        this.maxLevelAvailable += 1;
    }
    setMaxLevelAvailable(maxLevelAvailable) {
        this.maxLevelAvailable = maxLevelAvailable;
    }
    getCurrentLevel() {
        return this.currentLevel;
    }
    setCurrentLevel(map) {
        switch (map) {
            case 'map.json':
                this.currentLevel = Levels["map.json#entryPoint"];
                break;
            case 'Level1.json':
                this.currentLevel = Levels["Level1.json"];
                break;
            case 'Level2.json':
                this.currentLevel = Levels["Level2.json"];
                break;
            case 'Level3.json':
                this.currentLevel = Levels["Level3.json"];
                break;
            case 'Level5.json':
                this.currentLevel = Levels["Level5.json"];
                break;
        }
    }
    getCurrentLevelJson() {
        return Levels[this.currentLevel];
    }
    getHighestLevel() {
        return this.maxLevelAvailable;
    }
    static get instance() {
        return this._instance;
    }
}
Elevator._instance = new Elevator();
export var Levels;
(function (Levels) {
    Levels[Levels["min"] = 0] = "min";
    Levels[Levels["map.json#entryPoint"] = 1] = "map.json#entryPoint";
    Levels[Levels["Level1.json"] = 2] = "Level1.json";
    Levels[Levels["Level2.json"] = 3] = "Level2.json";
    Levels[Levels["Level3.json"] = 4] = "Level3.json";
    Levels[Levels["Level5.json"] = 5] = "Level5.json";
    Levels[Levels["Lobby.json"] = 6] = "Lobby.json";
    Levels[Levels["max"] = 7] = "max";
})(Levels || (Levels = {}));
export const elevator = Elevator.instance;
//# sourceMappingURL=elevator.js.map