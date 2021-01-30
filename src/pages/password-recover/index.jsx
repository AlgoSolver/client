import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import Message from "../../components/message/";
import {usePasswordRecovery} from '../../hooks/user'
const Wrapper = styled.div`
  width: 100%;
  max-width: 1118px;
  margin: 0 auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
const ConfirmMessage = styled.div`
  width: 100%;
`;

const RecoveryForm = () => {
  const {data,isLoading,isError,error,mutate} = usePasswordRecovery()
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
      <Text mg="0 0 1rem 0" type="h2" size="3.2rem" family="Avenir" bold center>
        Password Recovery
      </Text>
      <Text mg="0 0 1rem 0" type="p" size="1.6rem" family="Avenir" center>
        Enter your email and we'll email you a password recovery link
      </Text>
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
        <Button loading={isLoading} block big theme="green">
          Reset Password
        </Button>
      </form>
    </>
  );
};
const Switch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  span {
    font-size: 1.5rem;
    font-weight: 300;
    display: inline-block;
    margin-right: 0.8rem;
  }
`;

const Recovery = () => {
  return (
    <Wrapper>
      <Switch>
        <span>Already have an account?</span>
        <Link to="/accounts/login">
          <Button theme="green" circle>
            login
          </Button>
        </Link>
      </Switch>
      <div className="container">
        <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <RecoveryForm />
        </Form>
      </div>
    </Wrapper>
  );
};

export default Recovery;
