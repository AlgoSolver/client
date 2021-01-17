import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput, CheckBox, Divider } from "../../components/form/";
import Button from "../../components/button/";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1118px;
  margin: 0 auto;
`;
const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e) => console.log(e);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="email"
        placeholder="E-mail Address"
        register={register({
          required: true,
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
        })}
        error={checkErrors("email", errors)}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Password"
        register={register({ required: true, minLength: 6, maxLength: 32 })}
        error={checkErrors("password", errors)}
      />
      <CheckBox />
      <Button block>Login</Button>
    </form>
  );
};
const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Text
          style={{
            lineHeight: 1.3,
          }}
          mg="0 0 1rem 0"
          type="h2"
          size="2.5rem"
          family="Linotte"
          bold
        >
          Login To Your Account
        </Text>
        <LoginForm />
        <div
          style={{
            margin: "1rem 0",
            alignItems: "center",
            display:'flex',
            justifyContent:'space-between',
          }}
        >
          <Button link >
            Forgot your password?
          </Button>
          <Button link>
            Don't have an account
          </Button>
          </div>
          <Divider />
          <Button>Login with Google</Button>
        
      </Form>
    </Wrapper>
  );
};

export default Login;
