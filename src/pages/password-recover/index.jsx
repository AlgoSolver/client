import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import Message from "../../components/message/";
import { usePasswordRecovery } from "../../hooks/user";
import AuthContainer from "../../components/auth-container/";
import Head from '../../components/head/'

const ConfirmMessage = styled.div`
  width: 100%;
`;

const RecoveryForm = () => {
  const { data, isLoading, isError, error, mutate } = usePasswordRecovery();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e) => mutate(e);
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
          name="email"
          placeholder="E-mail Address"
          register={register({
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
          })}
          error={checkErrors("email", errors)}
          big
        />
        <Button loading={isLoading} block theme="green">
          Reset Password
        </Button>
      </form>
    </>
  );
};

const Recovery = () => {
  return (
    <AuthContainer>
      <Head title="Recover Your Password" />
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Text mg="0 0 1rem 0" type="h1" layer={1} bold center>
          Password Recovery
        </Text>
        <Text type="p" layer={2} center mg="0 0 1rem 0">
          Enter your email and we'll email you a password recovery link
        </Text>
        <div className="form__body">
          <RecoveryForm />
        </div>
        <div className="center">
          <Link to="/accounts/signup">
            <Button link layer={2}>
              Don't have an account? Sign up
            </Button>
          </Link>
        </div>
      </Form>
    </AuthContainer>
  );
};

export default Recovery;
