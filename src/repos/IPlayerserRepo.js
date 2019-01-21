"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Repo_1 = require("./Repo");
var PlayerRepo = /** @class */ (function (_super) {
    __extends(PlayerRepo, _super);
    function PlayerRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerRepo.prototype.test = function () {
        console.log("Overriding at child class");
    };
    return PlayerRepo;
}(Repo_1.Repo));
exports.PlayerRepo = PlayerRepo;
