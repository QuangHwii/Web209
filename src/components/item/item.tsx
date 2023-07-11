import React from "react";
import styles from './item.module.css'
import { Button } from "..";
import { BsTrash } from 'react-icons/bs'
import { ICar } from "../interface/car";

type ItemProps = {
    car: ICar;
    onRemove: (id: number | string) => void
};
const Item = ({ car, onRemove }: ItemProps) => {

    return (
        <ul className={styles["abc"]}>

            <li className="ml-3">
                {car?.name}
            </li>
            <li className="">
                {car?.price}
            </li>
            <Button onClick={() => onRemove(car.id!)} type="danger" icon={<BsTrash />} />
        </ul>
    );
};

export default Item;