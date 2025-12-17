/// <reference types="node" resolution-mode="require"/>
import EventEmitter from "events";
export declare function sleep(second?: number): Promise<void>;
export declare function formatHeaders(headers: Record<string, string>): string;
export declare const event: EventEmitter<[never]>;
export interface IpcResponse {
    code: number;
    message: string;
    data: Record<string, any> | null;
}
export declare function success(data: Record<string, any>): IpcResponse;
export declare function error(message?: string): IpcResponse;
export declare function isDeeplink(url: string): boolean;
