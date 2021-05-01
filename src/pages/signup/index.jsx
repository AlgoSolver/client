import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/user";
import Message from "../../components/message/";
import AuthContainer from "../../components/auth-container/";

const ConfirmMessage = styled.div`
  width: 100%;
`;
const SignupForm = () => {
  const { isLoading, data, isError, error, mutate } = useSignup();
  const { register, handleSubmit, errors, watch } = useForm();
  const cp = watch("password");

  const onSubmit = async (e) => {
    mutate(e);
  };
  if (data?.email) {
    const text = ` An Email has been sent successfuly to ${data?.email}, Follow
        instruction to you can login. Please note that the information in this
        email will be invalid in 30 minutes from now.`;
    return (
      <ConfirmMessage>
        <Message
          title="Success signup"
          show={true}
          subTitle={text}
          type="green"
        />
      </ConfirmMessage>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Message show={isError} subTitle={error?.message} type="red" />
        <TextInput
          type="text"
          name="username"
          placeholder="Username"
          register={register({
            required: true,
            minLength: 8,
            maxLength: 32,
          })}
          error={checkErrors("username", errors)}
          big
        />
        <TextInput
          type="text"
          name="email"
          placeholder="E-mail Address"
          register={register({
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
          })}
          error={checkErrors("email", errors)}
          big
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          register={register({ required: true, minLength: 6, maxLength: 32 })}
          error={checkErrors("password", errors)}
          big
        />
        <TextInput
          type="password"
          name="confirmedPassword"
          placeholder="Confirm Password"
          register={register({
            required: true,
            validate: (value) => value === cp,
          })}
          error={checkErrors("confirmedPassword", errors)}
          big
        />
        <Button theme="dark" loading={isLoading} layer={0} block>
          Signup
        </Button>
      </form>
    </>
  );
};

const Signup = () => {
  return (
    <AuthContainer>
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Text mg="0 0 1rem 0" type="h1" layer={1} bold center>
          Sign Up
        </Text>
        <Text type="p" layer={2} center mg="0 0 1rem 0">
          Let’s Sign up first for enter into AlgoSolver Website
        </Text>
        <div className="form__body">
          <SignupForm />
        </div>
        <div className="center">
          <Link to="/accounts/login">
            <Button link layer={2}>
              Already have an account? Log in
            </Button>
          </Link>
        </div>
      </Form>
    </AuthContainer>
  );
};

export default Signup;
