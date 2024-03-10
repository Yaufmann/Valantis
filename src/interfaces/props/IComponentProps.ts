import {Dispatch, SetStateAction} from "react";
import {IProduct} from "../../domain/entity/IProduct.ts";

export type IObjectField = {
    select: string,
    page: number
}

export interface Response {
    ids: string[],
    product: IProduct
}

export interface IFilterParams {
    // params: string[] | number[]
}

export interface PropsSelect {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
}

export interface PropsPagination {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
}