import Text from "../../components/Text/";
import styled from "styled-components";
import { Form, TextInput } from "../../components/form/";
import Button from "../../components/button/";
import { useForm } from "react-hook-form";
import { checkErrors } from "../../shared/libs/error-messages";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingPage from "../../shared/loading/";
import { useSelector, useDispatch } from "react-redux";
import { activateAccount } from "../../store/actions/user";
import Message from "../../components/message/";
import { useEffect } from "react";
import { requestStatus } from "../../store/actions/user";

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

const ActivateEmail = ({ token, handleSubmit }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkToken = () => {
    dispatch(requestStatus({ token }, `/user/activate-account`));
  };
  useEffect(() => {
    checkToken();
  }, [token]);
  if (user?.loading) return <LoadingPage />;
  if (user?.error)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Message subTitle={user.data} type="red" />
        <Link to="/accounts/signup">
          <Button theme="red" circle>
            signup
          </Button>
        </Link>
      </Form>
    );
  if (user?.data?.email)
    return (
      <Form initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {" "}
        <Message
          title="Account Verifycation Success"
          subTitle={`conguratilation ${user.data.usename}, your accuout has been
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
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch({ type: "user-go" });
  });
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
