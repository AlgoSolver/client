import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import Icons from "../../elements/icons/";
import Elevation from "../../elements/elevation/";
import Colors from "../../elements/colors/";
import Buttons from "../../elements/buttons";
import Typography from "../../elements/typography";
import Forms from "../../elements/form";
import Messages from "../../elements/messages/";
import Modals from "../../elements/modals/";

const PageContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const ElementsSidebar = styled.div`
  flex: 0 1 30rem;
  margin: 1rem 0 0;
  height: calc(100vh - 7.4rem);
  overflow-y: auto;
  padding: 2rem;
  border-right: 2px solid #ddd;
  .sidebar {
    width: 100%;
    &__menu {
      list-style-type: none;
    }
    &__item {
      margin: 0.8rem;
    }
    &__link {
      color: ${({ theme }) => theme.text};
      border-radius: 0.5rem;
      height: 3.2rem;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      transition: background-color 0.2s ease, color 0.2s ease;
      font-size: 1.4rem;
      font-weight: 600;
      text-transform: capitalize;
      font-family: "Avenir";
      margin: 0 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background: ${({ theme }) => theme.bg2};
      }
      &.active {
        background: ${({ theme }) => theme.bg2} !important;
      }
    }
  }
`;
const ElementsBody = styled.div`
  flex: 1;
`;

const LinkItem = ({ name, active }) => {
  return (
    <li className="sidebar__item">
      <Link
        to={`/elements/${name}`}
        className={` sidebar__link ${active === name ? "active" : ""}`}
      >
        {name}
      </Link>
    </li>
  );
};
const Sidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];
  console.log(active);
  return (
    <ElementsSidebar>
      <div className="sidebar">
        <ul className="sidebar__menu">
          <LinkItem name="colors" active={active} />
          <LinkItem name="icons" active={active} />
          <LinkItem name="elevation" active={active} />
          <LinkItem name="buttons" active={active} />
          <LinkItem name="typography" active={active} />
          <LinkItem name="forms" active={active} />
          <LinkItem name="messages" active={active} />
          <LinkItem name="modals" active={active} />
        </ul>
      </div>
    </ElementsSidebar>
  );
};
const Elements = () => {
  return (
    <PageContainer>
      <Router>
        <>
          <Sidebar />
          <ElementsBody>
            <Route path="/elements/colors">
              <Colors />
            </Route>
            <Route path="/elements/icons">
              <Icons />
            </Route>
            <Route path="/elements/buttons">
              <Buttons />
            </Route>
            <Route path="/elements/elevation">
              <Elevation />
            </Route>
            <Route path="/elements/typography">
              <Typography />
            </Route>
            <Route path="/elements/forms">
              <Forms />
            </Route>
            <Route path="/elements/messages">
              <Messages />
            </Route>
            <Route path="/elements/modals">
              <Modals />
            </Route>
          </ElementsBody>
        </>
      </Router>
    </PageContainer>
  );
};

export default Elements;
