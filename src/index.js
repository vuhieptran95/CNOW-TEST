"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_v1_players_1 = require("./routes/api-v1/api-v1-players");
var api_v1_players_2 = require("./services/service-v1/api-v1-players");
var bodyParser = require("body-parser");
var UoW_1 = require("./repos/UoW/UoW");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/", function (req, res) {
    UoW_1.unitOfWork.playerRepo.test();
    res.send("Server Started");
});
app.get(api_v1_players_1.API_V1_PLAYERS_ROUTE.getAllPlayers, api_v1_players_2.API_V1_PLAYERS_SERVICES.apiPlayersGet);
app.get(api_v1_players_1.API_V1_PLAYERS_ROUTE.getPlayerById, api_v1_players_2.API_V1_PLAYERS_SERVICES.apiPlayerGetById);
app.post(api_v1_players_1.API_V1_PLAYERS_ROUTE.createPlayers, urlencodedParser, api_v1_players_2.API_V1_PLAYERS_SERVICES.apiPlayerCreate);
app.put(api_v1_players_1.API_V1_PLAYERS_ROUTE.updatePlayer, urlencodedParser, api_v1_players_2.API_V1_PLAYERS_SERVICES.apiPlayerUpdate);
app.delete(api_v1_players_1.API_V1_PLAYERS_ROUTE.deletePlayer, api_v1_players_2.API_V1_PLAYERS_SERVICES.apiPlayerDelete);
app.listen(Number(process.env.port) || 3002, "localhost", function () { return console.log("Server TS started"); });
