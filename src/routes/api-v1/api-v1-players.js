"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var API_V1 = "/api/v1";
exports.API_V1_PLAYERS_ROUTE = {
    getAllPlayers: API_V1 + "/players",
    createPlayers: API_V1 + "/players",
    getPlayerById: API_V1 + "/player/:id",
    deletePlayer: API_V1 + "/player/:id",
    updatePlayer: API_V1 + "/player/:id"
};
