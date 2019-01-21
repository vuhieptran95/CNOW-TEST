import * as express from "express";
import { API_V1_PLAYERS_ROUTE } from "./routes/api-v1/api-v1-players";
import { API_V1_PLAYERS_SERVICES } from "./services/service-v1/api-v1-players";
import { db } from "./config/fireabase-config";
import { data } from "./data/data";
import bodyParser = require("body-parser");
import { unitOfWork } from "./repos/UoW/UoW";

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  unitOfWork.playerRepo.test();
  res.send("Server Started");
});

app.get(API_V1_PLAYERS_ROUTE.getAllPlayers, API_V1_PLAYERS_SERVICES.apiPlayersGet);
app.get(API_V1_PLAYERS_ROUTE.getPlayerById, API_V1_PLAYERS_SERVICES.apiPlayerGetById);
app.post(API_V1_PLAYERS_ROUTE.createPlayers, urlencodedParser, API_V1_PLAYERS_SERVICES.apiPlayerCreate);
app.put(API_V1_PLAYERS_ROUTE.updatePlayer, urlencodedParser, API_V1_PLAYERS_SERVICES.apiPlayerUpdate);
app.delete(API_V1_PLAYERS_ROUTE.deletePlayer, API_V1_PLAYERS_SERVICES.apiPlayerDelete);

app.listen(Number(process.env.port) || 3002, "localhost", () => console.log("Server TS started"));
