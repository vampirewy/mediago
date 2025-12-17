export declare const appData: string;
export declare const download: string;
export declare enum Platform {
    Windows = "win32",
    MacOS = "darwin",
    Linux = "linux"
}
export declare const isMac: boolean;
export declare const isWin: boolean;
export declare const isLinux: boolean;
export declare function resolveStatic(path: string): string;
export declare function resolveBin(path: string): string;
export declare const appName: string;
export declare const workspace: string;
export declare const defaultScheme = "mediago";
export declare const PERSIST_MEDIAGO = "persist:mediago";
export declare const PERSIST_WEBVIEW = "persist:webview";
export declare const PRIVACY_WEBVIEW = "webview";
export declare const db: string;
export declare const ffmpegPath: string;
export declare const biliDownloaderBin: string;
export declare const m3u8DownloaderBin: string;
export declare const pluginPath: string;
export declare const mobileDir: string;
export declare const pcUA = "";
export declare const mobileUA = "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36";
