import { type Controller } from "../interfaces.ts";
import PlayerWindow from "../windows/PlayerWindow.ts";
export default class PlayerController implements Controller {
    private readonly playerWindow;
    constructor(playerWindow: PlayerWindow);
    openPlayerWindow(): Promise<void>;
}
