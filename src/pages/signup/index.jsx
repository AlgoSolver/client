import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import signupImg from "../../assets/images/5.png";
//import hand from "../../assets/images/Saly-8.png";
import {useSignup} from '../../hooks/user'

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Message from "../../components/message/";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1118px;
  margin: 0 auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .img {
      width: 35rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const ConfirmMessage = styled.div`
  width: 100%;
`;
const SignupForm = () => {
  const {isLoading,data,isError,error,mutate} = useSignup();
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
      <Text mg="0 0 1rem 0" type="h2" size="3.2rem" family="Avenir" bold center>
        Create Your Account
      </Text>
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
        <Button theme="dark" loading={isLoading} layer={0} block big>
          Signup
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
const ImgContainer = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  if (!isBigPhone)
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="img"
      >
        {/* <AnimatePresence> */}
        {/*   {!user?.data?.email ? ( */}
            <motion.img exit={{ y: 100, opacity: 0 }} src={signupImg} alt="" />
        {/*   ) : ( */}
        {/*     <motion.img */}
        {/*       initial={{ y: -100, opacity: 0 }} */}
        {/*       animate={{ y: 0, opacity: 1 }} */}
        {/*       src={hand} */}
        {/*       alt="" */}
        {/*     /> */}
        {/*   )} */}
        {/* </AnimatePresence> */}
      </motion.div>
    );
  return null;
};
const Signup = () => {
  return (
    <Wrapper>
      <Switch>
        <span>Already have an account?</span>
        <Link to="/accounts/login">
          <Button theme="dark" layer={0} circle>
            login
          </Button>
        </Link>
      </Switch>
      <div className="container">
        <ImgContainer />
        <Form initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <SignupForm />
        </Form>
      </div>
    </Wrapper>
  );
};

export default Signup;
