import styled from "styled-components";
import { Form } from "../../components/form/";
import Button from "../../components/button/";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../../shared/loading/";
import Message from "../../components/message/";
import {useActivateAccount} from '../../hooks/user'
import {useEffect} from 'react';
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

const ActivateEmail = ({ token }) => {
  const {data,mutate,isLoading,isError,error} = useActivateAccount();
  useEffect(() => {
     mutate({token});
  }, [token,mutate]);
  if (isLoading) return <LoadingPage />;
  if (isError)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Message subTitle={error.message} type="red" />
        <Link to="/accounts/signup">
          <Button theme="red" circle>
            signup
          </Button>
        </Link>
      </Form>
    );
  if (data?.email)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {" "}
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
      </Form>
    );
  else return null;
};

const Activate = () => {
  const { token } = useParams();
  return (
    <Wrapper>
      <div className="container">
        {!token ? (
          <Message subTitle="Inalid Token" type="red" />
        ) : (
          <ActivateEmail token={token} />
        )}
      </div>
    </Wrapper>
  );
};

export default Activate;
