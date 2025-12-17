import { DataSource, EntityManager } from "typeorm";
import ElectronLogger from "./ElectronLogger.ts";
import { Vendor } from "../core/vendor.ts";
export default class DatabaseService implements Vendor {
    private readonly logger;
    appDataSource: DataSource;
    constructor(logger: ElectronLogger);
    init(): Promise<void>;
    get manager(): EntityManager;
}
