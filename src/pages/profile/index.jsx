import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button";
const Container = styled.div``;
const Profile = () => {
  return (
    <Container className="wrapper">
      <h1>Profile</h1>
      <Link to="/profile/submissions">
        <Button>go to user submission</Button>
      </Link>
    </Container>
  );
};

export default Profile;
