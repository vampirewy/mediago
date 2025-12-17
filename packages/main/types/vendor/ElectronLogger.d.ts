import { Logger } from "electron-log";
import { Vendor } from "../core/vendor.ts";
export default class ElectronLogger implements Vendor {
    logger: Logger;
    constructor();
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
    debug(...args: unknown[]): void;
    init(): Promise<void>;
}
