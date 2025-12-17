import { DownloadProgress } from "../interfaces.ts";
import Window from "../core/window.ts";
import ElectronLogger from "../vendor/ElectronLogger.ts";
import DownloadService from "../services/DownloadService.ts";
import ElectronStore from "../vendor/ElectronStore.ts";
import VideoRepository from "../repository/VideoRepository.ts";
export default class MainWindow extends Window {
    private readonly logger;
    private readonly downloadService;
    private readonly videoRepository;
    private readonly store;
    url: string;
    constructor(logger: ElectronLogger, downloadService: DownloadService, videoRepository: VideoRepository, store: ElectronStore);
    closeMainWindow: () => void;
    onDownloadReadyStart: ({ id, isLive }: DownloadProgress) => Promise<void>;
    init(): void;
    handleResize: () => void;
    storeChange: (store: unknown) => void;
    onDownloadProgress: (progress: DownloadProgress) => void;
    onDownloadSuccess: (id: number) => Promise<void>;
    onDownloadFailed: (id: number, err: unknown) => Promise<void>;
    onDownloadStart: (id: number) => Promise<void>;
    onDownloadStop: (id: number) => Promise<void>;
    receiveMessage: (id: number, message: string) => Promise<void>;
    send(channel: string, ...args: unknown[]): void;
    showWindow(url?: string): void;
}
