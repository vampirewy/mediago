/// <reference types="electron" />
import { ConversionPagination, type Controller } from "../interfaces.ts";
import ConversionRepository from "../repository/ConversionRepository.ts";
import { Conversion } from "../entity/Conversion.ts";
import { IpcMainEvent } from "electron/main";
export default class ConversionController implements Controller {
    private readonly conversionRepository;
    constructor(conversionRepository: ConversionRepository);
    getConversions(e: IpcMainEvent, pagination: ConversionPagination): Promise<{
        total: number;
        list: Conversion[];
    }>;
    addConversion(e: IpcMainEvent, conversion: Conversion): Promise<void>;
    deleteConversion(e: IpcMainEvent, id: number): Promise<void>;
}
