import ElectronLogger from "./ElectronLogger.ts";
import { Vendor } from "../core/vendor.ts";
export default class DevToolsService implements Vendor {
    private readonly logger;
    constructor(logger: ElectronLogger);
    init(): Promise<void>;
}
