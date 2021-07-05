import { Form } from "../../components/form/";
import Button from "../../components/button/";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../../shared/loading/";
import Message from "../../components/message/";
import { useActivateAccount } from "../../hooks/user";
import { useEffect } from "react";
import AuthContainer from "../../components/auth-container/";
import Head from '../../components/head/'

const ActivateEmail = ({ token }) => {
  const { data, mutate, isLoading, isError, error } = useActivateAccount();
  useEffect(() => {
    mutate({ token });
  }, [token, mutate]);
  if (isLoading) return <LoadingPage />;
  if (isError)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div className="form__body">
          <Message subTitle={error.message} type="red" />
          <Link to="/accounts/signup">
            <Button theme="red" circle>
              signup
            </Button>
          </Link>
        </div>
      </Form>
    );
  if (data?.email)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div className="form__body">
          <Message
            title="Account Verifycation Success"
            subTitle={`conguratilation ${data.usename}, your accuout has been
        successfully activated. now go to`}
            type="green"
          />
          <Link to="/accounts/login">
            <Button theme="green" circle>
              login
            </Button>
          </Link>
        </div>
      </Form>
    );
  else return null;
};

const Activate = () => {
  const { token } = useParams();
  return (
    <AuthContainer className="wrapper">
      <Head title="Activating Account" />
      <div className="container">
        {!token ? (
          <Message subTitle="Inalid Token" type="red" />
        ) : (
          <ActivateEmail token={token} />
        )}
      </div>
    </AuthContainer>
  );
};

export default Activate;
