"use client"

import ProductCard from "@/components/ProductCard";
import { getCategories, getProductsByCategory } from "@/services/products.services";
import { Category } from "@/types/category";
import { Product } from "@/types/products";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {

    const [ categories, setCategories ] = useState<Category[]>([]);
    const [ products, setProducts ] = useState<Product[]>([]);

    const params = useParams();
    const router = useRouter();

    const fetchCategories = async () => {

        const categoriesData = await getCategories();
        setCategories(categoriesData);
    }

    const selectedCategory = params?.categoryId;

    const fetchProducts = async(id:string) =>{
        const numberId = Number(id);
        if(isNaN(numberId)){
            const resp = await getProductsByCategory();
            setProducts(resp);
            return;
        }
        const filteredProducts = await getProductsByCategory(id);
        setProducts(filteredProducts);
    }

    useEffect(() => {
        fetchProducts(selectedCategory as string);
    }, [selectedCategory]);

    useEffect(() =>{
        fetchCategories();
    }, []);

    return (
        <Flex m="auto" >
            <Box w={"300px"} 
                 borderRight="1px solid #414141" 
                 borderRadius="sd" 
                 mt="2rem" 
                 p="1rem"
            >
                <Button w="100%" 
                            unstyled 
                            mb="1rem"
                            cursor="pointer"
                            onClick={() => router.push(`/categories/all`)}
                    >
                        Todos
                </Button>

                {categories?.map((category) => (
                    <Button w="100%" 
                            unstyled 
                            key={category.id}
                            mb="1rem"
                            cursor="pointer"
                            onClick={() => router.push(`/categories/${category.id}`)}
                    >
                        {category.category_name}
                    </Button>
                ))}
            </Box>
            <Grid gridTemplateColumns="repeat(4,1fr)" gap={3} p="2rem" >
                {
                    products?.map((product, index) => (
                    <ProductCard key={index + product.name} {...product}/>
                    ))
                }
            </Grid>
        </Flex>
    )
}