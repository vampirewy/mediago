import { IpcMainEvent } from "electron";
import { type Controller } from "../interfaces.ts";
import WebviewService from "../services/WebviewService.ts";
import ElectronStore from "../vendor/ElectronStore.ts";
import { SniffingHelper } from "../services/SniffingHelperService.ts";
export default class WebviewController implements Controller {
    private readonly webview;
    private readonly store;
    private readonly sniffingHelper;
    constructor(webview: WebviewService, store: ElectronStore, sniffingHelper: SniffingHelper);
    setWebviewBounds(e: IpcMainEvent, bounds: Electron.Rectangle): Promise<void>;
    browserViewLoadUrl(e: IpcMainEvent, url: string): Promise<void>;
    webviewUrlContextMenu(): Promise<void>;
    webviewGoBack(): Promise<boolean>;
    webviewReload(): Promise<void>;
    webviewShow(): Promise<void>;
    webviewHide(): Promise<void>;
    webviewGoHome(): Promise<void>;
    webviewChangeUserAgent(e: IpcMainEvent, isMobile: boolean): Promise<void>;
    pluginReady(): Promise<void>;
    clearWebviewCache(): Promise<void>;
}
