import {IFilterParams, IProduct} from "../entity/IProduct";

export interface IProductRepository {
    filter({...params}:IFilterParams): Promise<string[]>,
    getIds(offset: number, limit: number): Promise<string[]>,
    getFields(field: string, offset: number, limit: number): Promise<string[]>,
    getItems(ids: string[]): Promise<IProduct[]>,
}