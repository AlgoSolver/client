import styled from "styled-components";
import { theme } from "../../utils/theme";
import Text from "../../components/Text/";

const ElevationContainer = styled.div`
  padding: 2rem;
  .elevation {
    padding: 2rem;
    background: #f2f2f2;
    border-radius: 20px;
    &__item {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }
    &__desc {
      font-size: 1.7rem;
      font-weight: 300;
      text-align: left;
      margin-left: 3rem;
    }
  }
`;
const Shadow = styled.div`
  padding: 5rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: ${({ shadow }) => shadow};
`;
const Elevation = () => {
  return (
    <ElevationContainer>
      <Text type="h1">Elevation</Text>
      <div className="elevation">
        {theme.elevation.map((item) => (
          <div className="elevation__item">
            <Shadow className="elevation__shadow" shadow={item.shadow}></Shadow>
            <div className="elevation__desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </ElevationContainer>
  );
};

export default Elevation;
