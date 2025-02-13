import { Button } from "../../components/ui/Button";
import { InputMessage } from "../../components/ui/InputMessage";
import { InputStyled } from "../../components/ui/InputStyled";
import { Container } from "../Home/styles"
import { LoginContainer } from "./styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
    email: string
    password: string
    passwordConfirm: string
}

export const Signup = () => {
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<FormData>()

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        const comparePasswords = data.password == data.passwordConfirm
        if (!comparePasswords) {
            setError('password', { message: 'Digite a mesma senha' })
            setError('passwordConfirm', { message: 'Digite a mesma senha' })
            setValue('passwordConfirm', '')
            setValue('password', '')
            return
        }
        console.log(data)
    }

    return (
        <Container>
            <LoginContainer>
                <h2>Minha conta</h2>

                <div className="loginCard">
                    <h3>Cadastra-se</h3>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="login">
                            <div className="relative">
                                <label>
                                    Nome de usuário ou e-mail
                                    <InputStyled {...register('email', { required: "Campo obrigatório" })} type="text" placeholder="e-mail@email.com" />
                                </label>
                                {errors.email && <InputMessage $color="red">{errors.email.message}</InputMessage>}
                            </div>
                            <div className="relative">
                                <label>
                                    Senha
                                    <InputStyled {...register('password', { required: "Campo obrigatório" })} type="password" placeholder="*********" />
                                </label>
                                {errors.password && <InputMessage $color="red">{errors.password.message}</InputMessage>}
                            </div>
                            <div className="relative">
                                <label>
                                    Confirmar senha
                                    <InputStyled {...register('passwordConfirm', { required: "Campo obrigatório" })} type="password" placeholder="*********" />
                                </label>
                                {errors.passwordConfirm && <InputMessage $color="red">{errors.passwordConfirm.message}</InputMessage>}
                            </div>

                            <div className="signupTerms">
                                <p>Seus dados pessoais serão usados para aprimorar sua experiência neste site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade.</p>
                            </div>
                            <div className="submitBtn">
                                <Button>Cadastra-se</Button>

                            </div>
                            <div className="singup">
                                <Link to='/login'>Entrar</Link>

                            </div>
                        </div>
                    </form>
                </div>
            </LoginContainer>

        </Container >
    )

}