import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput, CheckBox, Divider } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import signupImg from "../../assets/images/6.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { requestStatus } from "../../store/actions/user";
import Message from "../../components/message/";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useFetch } from "../../shared/hooks/useFetch";

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

const LoginForm = ({ login }) => {
  const user = useSelector((state) => state.user);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e) => {
    if (!user.loading) login(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Message show={user.error} subTitle={user.data} type="red" />
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
      <CheckBox label="remember" register={register()}>
        remember me
      </CheckBox>
      <Button block big loading={user.loading}>
        Login
      </Button>
    </form>
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
        <img src={signupImg} alt="" />
      </motion.div>
    );
  return null;
};

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(requestStatus(data, "/user/login"));
  };
  useEffect(() => {
    return () => dispatch({ type: "user-go" });
  });
  return (
    <Wrapper>
      <Switch>
        <span>Don't have an account?</span>
        <Link to="/accounts/signup">
          <Button circle>signup</Button>
        </Link>
      </Switch>
      <div className="container">
        <ImgContainer />
        <Form initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <Text
            mg="0 0 1rem 0"
            type="h2"
            size="3.2rem"
            family="Avenir"
            bold
            center
          >
            Welcome Back!
          </Text>
          <LoginForm login={handleSubmit} />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/accounts/recover">
              <Button link>Forgot your password?</Button>
            </Link>
          </div>
          <Divider />
          <Google />
        </Form>
      </div>
    </Wrapper>
  );
};

const Google = ({ informParent = (f) => f }) => {
  const { res, request, loading, error } = useFetch();
  const responseGoogle = async (response) => {
    console.log(response.tokenId);
    try {
      await request("/user/google-login", "post", {
        idToken: response.tokenId,
      });
    } catch (err) {}
    // axios({
    //     method: 'POST',
    //     url: `${process.env.REACT_APP_API}/google-login`,
    //     data: { idToken: response.tokenId }
    // })
    //     .then(response => {
    //         console.log('GOOGLE SIGNIN SUCCESS', response);
    //         // inform parent component
    //         informParent(response);
    //     })
    //     .catch(error => {
    //         console.log('GOOGLE SIGNIN ERROR', error.response);
    //     });
  };
  if (error) {
    console.log(error);
  }
  console.log(res);
  return (
    <GoogleLogin
      clientId={`AIzaSyBapguRvas6SHdZcVu9_hGd-EHiHokFw7c`}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          big
          theme="light"
          block
        >
          Log in with Google
        </Button>
      )}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Login;
