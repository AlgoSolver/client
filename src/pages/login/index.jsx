import Text from "../../components/Text/";
import { Form, TextInput, CheckBox, Divider } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link } from "react-router-dom";
import Message from "../../components/message/";
import AuthContainer from "../../components/auth-container/";
import GoogleLogin from "react-google-login";
import { useLogin, useGoogleLogin } from "../../hooks/user";
import Head from '../../components/head/'

const LoginForm = ({ login }) => {
  const { isLoading, isError, error, mutate } = useLogin();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e) => {
    mutate(e);
  };
  return (
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
      <TextInput
        type="password"
        name="password"
        placeholder="Password"
        register={register({ required: true, minLength: 6, maxLength: 32 })}
        error={checkErrors("password", errors)}
        big
      />
      <CheckBox label="remember" register={register()}>
        Remember me
      </CheckBox>
      <Button block loading={isLoading}>
        Login
      </Button>
    </form>
  );
};

const Login = () => {
  return (
    <AuthContainer>
      <Head title="Login | AlgoSolver" />
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Text mg="0 0 1rem 0" type="h1" layer={1} bold center>
          Log In
        </Text>
        <Text type="p" layer={2} center mg="0 0 1rem 0">
          Just sign in if you have an account in here. Enjoy our Website
        </Text>
        <div className="form__body">
          <LoginForm />
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

const Google = () => {
  // const { res, request, error } = useFetch();
  const { mutate, isLoading, isError, error } = useGoogleLogin();
  const responseGoogle = (response) => {
    mutate({ idToken: response.tokenId });
    // try {
    //   await request("/user/google-login", "post", {
    //     idToken: response.tokenId,
    //   });
    // } catch (err) {}
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
  // if (error) {
  //   console.log(error);
  // }
  // console.log(res);
  return (
    <>
      <GoogleLogin
        clientId={`151428129813-nhg7fihrmv53ml959a4bfd2gq2rjsrr0.apps.googleusercontent.com`}
        onSuccess={responseGoogle}
        onFailure={() => {}}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            loading={isLoading}
            big
            theme="light"
            block
          >
            Log in with Google
          </Button>
        )}
      />
      <Message show={isError} subTitle={error?.message} type="red" />
    </>
  );
};

export default Login;
