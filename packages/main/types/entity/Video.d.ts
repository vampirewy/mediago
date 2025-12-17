import { DownloadStatus, DownloadType } from "../interfaces.ts";
export declare class Video {
    id: number;
    name: string;
    type: DownloadType;
    url: string;
    folder?: string;
    headers?: string;
    isLive: boolean;
    status: DownloadStatus;
    log: string;
    createdDate: Date;
    updatedDate: Date;
}
