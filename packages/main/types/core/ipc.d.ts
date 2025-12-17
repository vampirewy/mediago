import { Controller } from "../interfaces.ts";
import ElectronLogger from "../vendor/ElectronLogger.ts";
export default class IpcHandlerService {
    private readonly controllers;
    private readonly logger;
    constructor(controllers: Controller[], logger: ElectronLogger);
    private registerIpc;
    init(): void;
}
