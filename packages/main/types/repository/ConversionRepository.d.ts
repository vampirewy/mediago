import { ConversionPagination } from "../interfaces.ts";
import TypeORM from "../vendor/TypeORM.ts";
import { Conversion } from "../entity/Conversion.ts";
export default class ConversionRepository {
    private readonly db;
    constructor(db: TypeORM);
    findConversion(id: number): Promise<Conversion>;
    getConversions(pagination: ConversionPagination): Promise<{
        total: number;
        list: Conversion[];
    }>;
    addConversion(conversion: Conversion): Promise<void>;
    deleteConversion(id: number): Promise<void>;
}
