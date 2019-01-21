import * as express from "express";
import { unitOfWork } from "../../Repos/UoW/UoW";
import bodyParser = require("body-parser");
import { PLAYER_RESPONSES } from "./../../responses/player-responses";
import { Player } from "../../models/data-models/player";

export const API_V1_PLAYERS_SERVICES = {
  apiPlayersGet: (req: express.Request, res: express.Response) => {
    unitOfWork.playerRepo.getAll("players").then(players => res.json(players));
  },
  apiPlayerUpdate: async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const updatedPlayer: Player = {
      country: req.body.country,
      numberOfVotes: req.body.numberOfVotes,
      playerName: req.body.playerName
    };
    if (await unitOfWork.playerRepo.isExisted("players", id)) {
      unitOfWork.playerRepo.update("players", updatedPlayer, id).then(() => res.send(PLAYER_RESPONSES.updated));
    } else {
      res.send(PLAYER_RESPONSES.failed);
    }
  },
  apiPlayerCreate: (req: express.Request, res: express.Response) => {
    const player: Player = {
      country: req.body.country,
      numberOfVotes: req.body.numberOfVotes,
      playerName: req.body.playerName
    };
    unitOfWork.playerRepo.create("players", player).then(() => res.send(PLAYER_RESPONSES.created));
  },
  apiPlayerDelete: (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    unitOfWork.playerRepo.delete("players", id).then(() => res.send(PLAYER_RESPONSES.deleted));
  },
  apiPlayerGetById: (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    unitOfWork.playerRepo.getById("players", id).then(players => res.json(players));
  }
};
