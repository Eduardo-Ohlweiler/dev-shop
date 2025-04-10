import { Product } from "@/types";
import React, { useState } from "react";

const ProductItem = ({nome, valor, estoque, onClick}:Product) => {

    const [meuEstado, setMeuEstado] = useState<number>(0);

    return (
    <div>
        <p> {nome} </p>
        <p> {valor} </p>
        <p> {estoque} </p>
        <button onClick={onClick}></button>
    </div>
    );
};

export default ProductItem;