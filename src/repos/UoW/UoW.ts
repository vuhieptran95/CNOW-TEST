import { Iplayersrepo, PlayerRepo } from "../IPlayerserRepo";
import { IunitOfWork } from "./IUoW";
class UnitOfWork implements IunitOfWork {
  /**
   *
   */
  playerRepo: Iplayersrepo;
  constructor() {
    this.playerRepo = new PlayerRepo();
  }
}
export const unitOfWork = new UnitOfWork();
