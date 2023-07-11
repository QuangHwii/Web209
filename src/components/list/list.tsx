import React from "react";
import { Item } from "..";
import { ICar } from "../interface/car";


type ListProps = {
    data: ICar[];
    onRemove: (id: number | string) => void
};

const List = ({ data, onRemove }: ListProps) => {

    return (
        <ul>
            {data?.map((item) => (
                <Item key={item.id} car={item} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default List;