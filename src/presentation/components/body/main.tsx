import React, {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {fetchPage} from "../../store/slice.ts";
import Loader from "../loader/Loader.tsx";
import MainItem from "./mainItem.tsx";
import Pagination from "../pagination/Pagination.tsx";
import Select from "../select/Select.tsx";



const Main = () => {
    const {items, loading} = useAppSelector(state => state.product);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchPage(page))
    }, [page]);


    const filterItems = items.filter((item) => {
        const product = item.product.toLowerCase().includes(search.toLowerCase());
        const id = item.id.toLowerCase().includes(search.toLowerCase());
        const brand = item.brand && item.brand.toLowerCase().includes(search.toLowerCase());
        const price = item.price && item.price.toString().toLowerCase().includes(search.toLowerCase());

        return product || id || brand || price;
    })

    return (
        <div className="containerBody">
            <div className="containerUI">
                <Select
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            {loading ? <Loader/> :
                  <div className="cardContainer">
                      {items.length && filterItems.map(item =>
                       <MainItem key={item.id} item={item} />)}
                  </div>
            }
            <Pagination
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default Main;