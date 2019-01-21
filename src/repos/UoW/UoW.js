"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPlayerserRepo_1 = require("../IPlayerserRepo");
var UnitOfWork = /** @class */ (function () {
    function UnitOfWork() {
        this.playerRepo = new IPlayerserRepo_1.PlayerRepo();
    }
    return UnitOfWork;
}());
exports.unitOfWork = new UnitOfWork();
