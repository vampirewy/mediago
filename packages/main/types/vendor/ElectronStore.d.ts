import Store from "electron-store";
import { AppStore } from "../main.ts";
import { Vendor } from "../core/vendor.ts";
export default class StoreService extends Store<AppStore> implements Vendor {
    constructor();
    init(): Promise<void>;
}
