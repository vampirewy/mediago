import Window from "../core/window.ts";
import ElectronStore from "../vendor/ElectronStore.ts";
export default class BrowserWindow extends Window {
    private readonly store;
    url: string;
    constructor(store: ElectronStore);
    storeChange: (store: unknown) => void;
    handleNewWindowsVal: (newValue: unknown) => void;
    handleResize: () => void;
    showWindow: () => void;
    hideWindow: () => void;
    send(channel: string, ...args: unknown[]): void;
}
