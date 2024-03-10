import React, {FC}  from "react";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {setLoading} from "../../store/slice.ts";
import {PropsPagination} from "../../../interfaces/props/IComponentProps.ts";



const Pagination: FC<PropsPagination> = React.memo(({page, setPage}) => {
    const dispatch = useAppDispatch();

    const selectLeft = () => {
        setPage(page - 1)
        dispatch(setLoading(true))
    }

    const selectRight = () => {
        setPage(page + 1)
        dispatch(setLoading(true))
    }

    return (
        <div className="page_wrapper">
            <button
                className='arrayLeft'
                onClick={selectLeft}
                disabled={page === 1}
            >&lt;</button>
                <span
                    className={'page page__current'}
                >
                        {page > 0 ? page : 1}
                </span>
            <button
                className='arrayRight'
                onClick={selectRight}
            >&gt;</button>
        </div>
    );
});

export default Pagination;