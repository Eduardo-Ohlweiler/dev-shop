import * as yup from "yup";

const passwordRules = yup
    .string()
    .required("Campo senha obrigatório")
    .min(8, "Mínimo de 8 caracteres")
    .test("has-uppercase", "É necessário pelo menos uma letra maiúscula", (value) => {
        return /[A-Z]/.test(value || "");
    })
    .test("has-lower", "É necessário pelo menos uma letra minúscula", (value) => {
        return /[A-Z]/.test(value || "");
    })
    .test("has-number", "É necessário pelo menos um número", (value) => {
        return /[0-9]/.test(value || "");
    });

export const registerSchema = yup.object().shape({
    name: yup.string().required("Campo nome obrigatório"),
    email: yup
        .string()
        .email("Email inválido")
        .required("Campo email obrigatório"),
    password: passwordRules,
    confirmPassword: yup
        .string()
        .required("Campo confirmar senha obrigatório")
        .oneOf([yup.ref("password")], "Senhas não conferem"),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email inválido")
        .required("Campo email obrigatório"),
    password: yup.string().required("Campo senha obrigatório"),
});