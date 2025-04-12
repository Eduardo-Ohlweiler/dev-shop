"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Provider } from "@/components/ui/provider";
import {
  Button,
  Center,
  Field,
  Fieldset,
  Highlight,
  Input,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Register() {
  return (
    <Provider>
      <Center h="100vh">
        <Fieldset.Root
          size="lg"
          maxW="md"
          border="1px solid #fff"
          p="1rem"
          borderRadius="xl"
        >
          <Stack>
            <Fieldset.Legend fontSize="2rem">Bem vindo</Fieldset.Legend>
            <Fieldset.HelperText>
              É um prazer ter você aqui.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Nome:</Field.Label>
              <Input name="name" borderRadius="2xl" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email:</Field.Label>
              <Input name="email" type="email" borderRadius="2xl" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Senha:</Field.Label>
              <PasswordInput name="password" borderRadius="2xl" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirme a senha:</Field.Label>
              <PasswordInput name="password" borderRadius="2xl" />
            </Field.Root>
          </Fieldset.Content>
          <Separator />
          <Button
            type="submit"
            alignSelf="flex-start"
            w="90%"
            mx="auto"
            borderRadius="2xl"
          >
            Submit
          </Button>

          <Separator />
          <Text>
            Já tem uma conta?{" "}
            <Link href="/login">
              <Highlight query="Entrar" styles={{ color: "#00b3b9" }}>
                Entrar
              </Highlight>
            </Link>
          </Text>
        </Fieldset.Root>
      </Center>
    </Provider>
  );
}
