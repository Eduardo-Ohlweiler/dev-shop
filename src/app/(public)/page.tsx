import { Box, Button, Center, Flex, Group, Heading, Input, Text } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <Center flexDir="column">
      <Heading pt="2rem" >Bem vindo ao DevShop</Heading>
      <Group attached w="4xl" mt="2rem" >
        <Input placeholder="Buscar..." />
        <Button bg="bg.subtle" variant="outline" >
          <IoIosSearch />
        </Button>
      </Group>
      <Box w="60%" h="500px" bg="gray.600" mt="2rem" ></Box>
      
      <Box mt="3rem" >
        <Heading textAlign="center" mb="1rem" >Categorias</Heading>
        <Flex gap="2rem" >
          {
            ["Roupas", "Perifericos", "Utencilios"].map((item, index) => (
                <Box key={index} textAlign="center" >
                    <Box w="70px" h="70px" bg="gray.300" borderRadius="full" ></Box>
                    <Text>{item}</Text>
                </Box>
            ))
          }
        </Flex>
      </Box>
    </Center>
  );
}
