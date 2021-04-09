import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput} from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Message from "../../components/message/";
import { useEffect } from "react";
import LoadingPage from "../../shared/loading/";
import {useTokenVerification,usePassswordReset} from '../../hooks/user'
import AuthContainer from "../../components/auth-container/";

const ConfirmMessage = styled(motion.div)`
  width: 100%;
`;

const RenderForm = ({ token }) => {
  const {data,isLoading,isError,error,mutate} = useTokenVerification(); 
  useEffect(() => {
    mutate({token});
  }, [token,mutate]);
  if (isLoading) return <LoadingPage />;
  if (isError)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div className="form__body">

        <Message subTitle={error.message} type="red" />
        <Link to="/accounts/recover">
          <Button theme="yellow" circle>
            reset password
          </Button>
        </Link>
        </div>
      </Form>
    );
  if (data?.email)
    return (
        <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
         <div className="form__body">
          <RestForm token={token}/>
          </div>
        </Form>
    );
  else return null;
};

const RestForm = ({ token }) => {
  const {data,isLoading,isError,error,mutate} = usePassswordReset(); 
  const { register, handleSubmit, errors, watch } = useForm();
  const cp = watch("password");
  const onSubmit = (data) => mutate({ ...data, token });

  if (data?.email) {
    const text = ` your password has been successfully updated, now go to login with the new password`;
    return (
      <ConfirmMessage
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Message
          title="Success signup"
          show={true}
          subTitle={text}
          type="green"
        />
        <Link to="/accounts/login">
          <Button layer={0} circle>
            login
          </Button>
        </Link>
      </ConfirmMessage>
    );
  }
  return (
    <>
      <Text mg="0 0 1rem 0" type="h2" size="3.2rem" family="Avenir" bold center>
        Reset Your Password
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Message show={isError} subTitle={error?.message} type="red" />
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
        <Button loading={isLoading} block>
          Confirm
        </Button>
      </form>
    </>
  );
};


const Reset = () => {
  const { token } = useParams();
  return (
    <AuthContainer>
        {!token ? (
          <div className="hello">
            {token} <Message subTitle="Inalid Token" type="red" />
          </div>
        ) : (
          <RenderForm token={token} />
        )}
    </AuthContainer>
  );
};

export default Reset;
