/// <reference types="electron" />
import { IpcMainEvent } from "electron/main";
import { type Controller, DownloadItem, DownloadItemPagination, ListPagination } from "../interfaces.ts";
import MainWindow from "../windows/MainWindow.ts";
import ElectronStore from "../vendor/ElectronStore.ts";
import DownloadService from "../services/DownloadService.ts";
import VideoRepository from "../repository/VideoRepository.ts";
import WebviewService from "../services/WebviewService.ts";
export default class DownloadController implements Controller {
    private readonly store;
    private readonly videoRepository;
    private readonly downloadService;
    private readonly mainWindow;
    private readonly webviewService;
    constructor(store: ElectronStore, videoRepository: VideoRepository, downloadService: DownloadService, mainWindow: MainWindow, webviewService: WebviewService);
    showDownloadDialog(e: IpcMainEvent, data: DownloadItem): Promise<void>;
    addDownloadItem(e: IpcMainEvent, video: Omit<DownloadItem, "id">): Promise<import("../entity/Video.ts").Video>;
    addDownloadItems(e: IpcMainEvent, videos: Omit<DownloadItem, "id">[]): Promise<import("../entity/Video.ts").Video[]>;
    editDownloadItem(e: IpcMainEvent, video: DownloadItem): Promise<import("../entity/Video.ts").Video>;
    editDownloadNow(e: IpcMainEvent, video: DownloadItem): Promise<import("../entity/Video.ts").Video>;
    downloadNow(e: IpcMainEvent, video: Omit<DownloadItem, "id">): Promise<import("../entity/Video.ts").Video>;
    downloadItemsNow(e: IpcMainEvent, videos: Omit<DownloadItem, "id">[]): Promise<import("../entity/Video.ts").Video[]>;
    getDownloadItems(e: IpcMainEvent, pagination: DownloadItemPagination): Promise<ListPagination>;
    startDownload(e: IpcMainEvent, vid: number): Promise<void>;
    stopDownload(e: IpcMainEvent, id: number): Promise<void>;
    deleteDownloadItem(e: IpcMainEvent, id: number): Promise<import("typeorm").DeleteResult>;
}
