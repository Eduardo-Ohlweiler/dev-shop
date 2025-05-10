"use client"
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/products";
import { Box, Button, Card, Image, Text } from "@chakra-ui/react"

const ProductCard: React.FC<Product> = ({ id, name, value, category_id, img_src}) => {

  const {addToCart} = useCart();

  return (
    <Card.Root  overflow="hidden">
        <Box h="350px" bg="white">
            <Image
                src={img_src}
                alt={name}
                h="350px"
                objectFit={"contain"}
            />
        </Box>
      <Card.Body gap="2" py="2">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2" flexDir="column" alignItems={"start"}>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {value.toLocaleString("pt-BR", {currency: "BRL", style: "currency"})}
        </Text>
        <Button variant="ghost" w="100%" bg={"white"} color={"black"}
          onClick={() => addToCart({id, name, value, category_id, img_src})}
        >
          Adicionar
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard;