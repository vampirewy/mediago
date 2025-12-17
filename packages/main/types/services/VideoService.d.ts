import StoreService from "../vendor/ElectronStore.ts";
import ElectronLogger from "../vendor/ElectronLogger.ts";
export declare class VideoService {
    private readonly store;
    private readonly logger;
    private port;
    private videoDir;
    private localIp;
    constructor(store: StoreService, logger: ElectronLogger);
    getVideoFiles: () => Promise<{
        title: string;
        url: string;
    }[]>;
    init(): void;
}
