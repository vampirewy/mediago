import { Video } from "../entity/Video.ts";
import { DownloadItem, DownloadItemPagination, DownloadStatus } from "../interfaces.ts";
import TypeORM from "../vendor/TypeORM.ts";
export default class VideoRepository {
    private readonly db;
    constructor(db: TypeORM);
    addVideo(video: Omit<DownloadItem, "id">): Promise<Video>;
    addVideos(videos: Omit<DownloadItem, "id">[]): Promise<Video[]>;
    editVideo(video: DownloadItem): Promise<Video>;
    findAllVideos(): Promise<Video[]>;
    findVideos(pagination: DownloadItemPagination): Promise<{
        total: number;
        list: Video[];
    }>;
    findVideo(id: number): Promise<Video>;
    findVideoByName(name: string): Promise<Video | null>;
    changeVideoStatus(id: number | number[], status: DownloadStatus): Promise<void>;
    changeVideoIsLive(id: number): Promise<Video>;
    findWattingAndDownloadingVideos(): Promise<Video[]>;
    deleteDownloadItem(id: number): Promise<import("typeorm").DeleteResult>;
    findVideoByUrl(url: string): Promise<Video | null>;
    appendDownloadLog(id: number, message: string): Promise<Video>;
    getDownloadLog(id: number): Promise<string>;
    getVideoFolders(): Promise<string[]>;
}
