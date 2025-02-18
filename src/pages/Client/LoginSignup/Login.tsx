// import { useState } from "react";
import { Button } from "@components/ui/Button";
import { InputMessage } from "@components/ui/InputMessage";
import { InputStyled } from "@components/ui/InputStyled";
import { Container } from "../Home/styles";
import { LoginContainer } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "Contexts/AuthContext";

// REACT HOOK FORM + ZOD => gerenciamento de formulário + a validação
// REACT HOOK FORM => gerenciamento de formulário
// ZOD => validação e transformação de dados
// HOOKFORM/RESOLVERS => faz a ligação entre o Zod ou qualquer lib de validação (YUP, JOI) e o RHF

// SCHEMA

const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Informe um endereço de e-mail válido."),
  password: z
    .string()
    .nonempty("Campo obrigatório.")
    .min(6, "Verifique se a senha tem pelo menos 6 caracteres."),
});

type signInUserFormData = z.infer<typeof signInUserFormSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signInUserFormData>({
    mode: "onBlur",
    resolver: zodResolver(signInUserFormSchema),
  })

  const { signIn } = useContext(AuthContext)

  const handleSubmitForm: SubmitHandler<signInUserFormData> = async (data) => {
    try {
        await signIn(data)
        reset()
    } catch (error) {
        if (error instanceof ZodError) {
            setError('password', { type: 'manual', message: error.message })
        }
    }
  }

  return (
    <Container>
      <LoginContainer>
        <h2>Minha conta</h2>

        <div className="loginCard">
          <h3>Entrar</h3>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="login">
              <div className="relative">
                <label>
                  E-mail
                  <InputStyled
                    {...register("email")}
                    type="text"
                    placeholder="e-mail@email.com"
                  />
                </label>
                {errors?.email && (
                  <InputMessage $color="red">
                    {errors?.email?.message}
                  </InputMessage>
                )}
              </div>
              <div className="relative">
                <label>
                  Senha
                  <InputStyled
                    {...register("password")}
                    type="password"
                    placeholder="*********"
                  />
                </label>
                {errors?.password && (
                  <InputMessage $color="red">
                    {errors?.password?.message}
                  </InputMessage>
                )}
              </div>

              {/* <div className="checkbox relative">
                                <label>
                                    <span className={checked ? 'checked' : ''}></span>
                                    <InputStyled {...register('still', { onChange: () => setChecked(!checked) })} type="checkbox" />
                                    Manter conectado
                                </label>
                            </div> */}

              <div className="passwordRecovery">
                <p>Recupere sua senha</p>
              </div>
              <div className="submitBtn">
                <Button disabled={isSubmitting}>Entrar</Button>
              </div>
              <div className="singup">
                <Link to="/signup">Criar uma conta</Link>
              </div>
            </div>
          </form>
        </div>
      </LoginContainer>
    </Container>
  );
};
