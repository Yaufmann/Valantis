import React, {Dispatch, FC, SetStateAction, useCallback} from 'react';
import {PropsSelect} from "../../../interfaces/props/IComponentProps.ts";

const Select: FC<PropsSelect> = React.memo(({search,setSearch}) => {
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className='selectContainer'>
           <input
             value={search}
             type={"text"}
             placeholder={"Введите текст поиска"}
             onChange={handlerInput}
           />
        </div>
    );
});

export default Select;