import type {IProductRepository} from "../domain/repository/IProductRepository";
import {IFilterParams, IProduct} from "../domain/entity/IProduct";
import reTrayOnError from "../common/retrayOnError";
import {Api} from "../services/api";
import {inject, injectable} from "tsyringe";
import uniqueByKey from "../common/uniqueByKey.ts";

@injectable()
export default class ProductRepository implements IProductRepository {

    constructor(@inject('ApiService') private apiService: Api) {}

    @reTrayOnError(1)
    async filter({...params}: IFilterParams): Promise<string[]> {
        return this.apiService.fetch({
            action: 'filter',
            params
        });
    }

    @reTrayOnError(1)
    async getFields(field: string, offset: number, limit: number): Promise<string[]> {
        return this.apiService.fetch({
            action: 'get_fields',
            "params": {
                field,
                offset,
                limit}
        });
    }

    @reTrayOnError(1)
    async getIds(offset: number, limit: number): Promise<string[]> {
        return this.apiService.fetch({
            action: 'get_ids',
            "params": {offset,limit}
        });
    }

    @reTrayOnError(1)
    @uniqueByKey('id')
    async getItems(ids: string[]): Promise<IProduct[]> {
        return this.apiService.fetch({
            action: 'get_items',
            "params": {ids}
        })
    }
}