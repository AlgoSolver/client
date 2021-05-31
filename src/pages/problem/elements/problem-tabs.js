import styled from "styled-components";
import { useRouteMatch, NavLink } from "react-router-dom";

const TabContainer = styled.div`
  .tabs {
    background: ${({ theme }) => theme.colors.light[0]};
    display: flex;
    justify-content: space-between;
    box-shadow: ${({ theme }) => theme.elevation[8].shadow};
    align-items: center;
    &__list {
      display: flex;
      align-items: center;
    }
    &__item {
      padding: 1.6rem 1rem;
      cursor: pointer;
      user-select: none;
      transition: background 0.2s;
      span {
        font-size: 1.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.dark[2]};
      }
      &.active {
        background: ${({ theme }) => theme.colors.light[4]};
        border: 1px solid ${({ theme }) => theme.colors.light[1]};
        border-bottom: none;
      }
    }
  }
`;

export const Tabs = () => {
  let { url } = useRouteMatch();
  return (
    <TabContainer>
      <div className="tabs">
        <div className="tabs__list">
          <NavLink
            as="div"
            to={`${url}/description`}
            className="tabs__item"
            activeClassNam="active"
          >
            <span>Description</span>
          </NavLink>
          <NavLink
            as="div"
            to={`${url}/submissions`}
            className="tabs__item"
            activeClassNam="active"
          >
            <span>Submissions</span>
          </NavLink>
          <NavLink
            as="div"
            to={`${url}/solution`}
            className="tabs__item"
            activeClassNam="active"
          >
            <span>Solution</span>
          </NavLink>
        </div>
      </div>
    </TabContainer>
  );
};
