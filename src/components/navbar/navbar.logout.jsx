import { Logout as LogoutIcon } from "../../assets/icons";
import Button from "../button/";
import client from "../../hooks";
import {INITIAL_USER} from '../../hooks/user'
const Logout = () => {
  const logout = () => {
    localStorage.removeItem("algosolver_token");
    client.setQueryData("auth", INITIAL_USER);
  };
  return (
    <>
      <Button
        withIcon={() => <LogoutIcon />}
        type="light"
        mg=".6rem 1.6rem 0"
        style={{ width: "-webkit-fill-available" }}
        onClick={logout}
      >
        Logout
      </Button>
    </>
  );
};
export default Logout;