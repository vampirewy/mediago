import ElectronLogger from "./ElectronLogger.ts";
import { Vendor } from "../core/vendor.ts";
import ElectronStore from "./ElectronStore.ts";
import MainWindow from "../windows/MainWindow.ts";
export default class UpdateService implements Vendor {
    private readonly logger;
    private readonly store;
    private readonly mainWindow;
    constructor(logger: ElectronLogger, store: ElectronStore, mainWindow: MainWindow);
    init(): Promise<void>;
    checkForUpdates(): Promise<void>;
    autoUpdate(): Promise<void>;
    changeAllowBeta(allowBeta: boolean): Promise<void>;
    manualUpdate(): Promise<void>;
    startDownload(): Promise<void>;
    install(): Promise<void>;
}
