import { Irepo } from "./IRepo";
import { Repo } from "./Repo";
import { db } from "../config/fireabase-config";
import { Player } from "../models/data-models/player";

export interface Iplayersrepo extends Irepo<Player> {}

export class PlayerRepo extends Repo<Player> implements Iplayersrepo {
  test() {
    console.log("Overriding at child class");
  }
}
