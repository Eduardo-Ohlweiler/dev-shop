"use client"

import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/products";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

export interface CartCardProps extends Product {
    amount: number;
}

const CartCard: React.FC<CartCardProps> = ({
    id,
    category_id,
    img_src,
    name,
    value,
    amount,
  }) => {

    const { addToCart, removeToCart } = useCart();

    return (
      <Flex gap="1rem">
        <Image src={img_src} width={"70px"} height={"70px"} borderRadius="md" alt="asdasd" />
        <Box flex="1">
            <Text>{name}</Text>
            <Text>Valor: {(value * amount).toLocaleString("pt-BR", 
                         {currency: "BRL", 
                         style: "currency"})}
            </Text>
          <Flex justify="space-between">
            <Text>Qtd: {amount}</Text>
            <Flex>
                <BiMinus size={24} style={{cursor: "pointer"}}  
                         onClick={() => removeToCart(id)}
                />
                <BiPlus  size={24} style={{cursor: "pointer"}} 
                         onClick={() => addToCart({id, name, value, category_id, img_src})} 
                />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  };
  
  export default CartCard;