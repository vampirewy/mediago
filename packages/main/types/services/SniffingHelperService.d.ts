/// <reference types="node" resolution-mode="require"/>
import { DownloadType } from "../interfaces.ts";
import ElectronLogger from "../vendor/ElectronLogger.ts";
import EventEmitter from "events";
export interface SourceParams {
    url: string;
    documentURL: string;
    name: string;
    type: DownloadType;
    headers?: string;
}
export interface SourceFilter {
    hosts?: RegExp[];
    matches?: RegExp[];
    type: DownloadType;
    schema?: Record<string, string>;
}
interface PageInfo {
    title: string;
    url: string;
}
export declare class SniffingHelper extends EventEmitter {
    private readonly logger;
    private pageInfo;
    private readonly prepareDelay;
    constructor(logger: ElectronLogger);
    pluginReady(): void;
    update(pageInfo: PageInfo): void;
    checkPageInfo(): void;
    start(privacy?: boolean): void;
    send: (item: SourceParams) => void;
    private onSendHeaders;
}
export {};
