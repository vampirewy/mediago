/// <reference types="node" resolution-mode="require"/>
import EventEmitter from "events";
import { DownloadParams, Task } from "../interfaces.ts";
import ElectronLogger from "../vendor/ElectronLogger.ts";
import ElectronStore from "../vendor/ElectronStore.ts";
import VideoRepository from "../repository/VideoRepository.ts";
interface DownloadContext {
    isLive: boolean;
    percent: string;
    speed: string;
    ready: boolean;
}
export interface DownloadOptions {
    abortSignal: AbortController;
    encoding?: string;
    onMessage?: (ctx: DownloadContext, message: string) => void;
    id: number;
}
interface Schema {
    args: Record<string, {
        argsName: string[] | null;
    }>;
    consoleReg: {
        percent: string;
        speed: string;
        error: string;
        start: string;
        isLive: string;
    };
    bin: string;
    platform: string[];
    type: string;
}
export default class DownloadService extends EventEmitter {
    private readonly logger;
    private readonly videoRepository;
    private readonly storeService;
    private queue;
    private active;
    private limit;
    private signal;
    constructor(logger: ElectronLogger, videoRepository: VideoRepository, storeService: ElectronStore);
    addTask(task: Task): Promise<void>;
    stopTask(id: number): Promise<void>;
    execute(task: Task): Promise<void>;
    removeTask(id: number): void;
    runTask(): void;
    private _execa;
    downloader(params: DownloadParams, schema: Schema): Promise<void>;
    process(params: DownloadParams): Promise<void>;
}
export {};
