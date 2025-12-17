import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
export default class Window {
    window: BrowserWindow | null;
    options: BrowserWindowConstructorOptions;
    url: string;
    constructor(options: BrowserWindowConstructorOptions);
    create(): BrowserWindow;
    readyToShow: () => void;
    windowClose: () => void;
}
