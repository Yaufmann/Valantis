import {FC} from "react";
import type {IProduct} from "../../../domain/entity/IProduct.ts";


const MainItem: FC<{ item: IProduct }> = ({item}) => {
    return (
        <>
            <div className="card">
                <div className="title">
                    <span>{item.product}</span>
                </div>
                <div className="price">
                    <span>{item.price}</span>
                </div>
                <div className="price">
                    <span>{item.brand === null ? "null" : item.brand}</span>
                </div>
                <div className="price">
                    <span>{item.id}</span>
                </div>
            </div>
        </>
    );
};

export default MainItem;