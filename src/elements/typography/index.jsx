import Text from "../../components/Text/";
import styled from "styled-components";

const TypographyContainer = styled.div`
  padding: 2rem;
  .body {
    padding: 2rem;
    padding-left: 4rem;
    background: #fff;
    border-radius: 2rem;
    width: 100%;
  }
`;
/* Body / 16pt */

const Typography = () => {
  return (
    <TypographyContainer>
      <Text type="h1">Typography</Text>
      <div className="body">
        <Text type="h1" bold>
          Headline-Text 1
        </Text>
        <Text type="h2" color="primary" layer="1" bold>
          Headline-Text 2
        </Text>
        <Text type="h3" bold>
          Headline-Text 3
        </Text>
        <Text type="h4" bold>
          Headline-Text 4
        </Text>
        <Text type="h5" bold>
          Headline-Text 5
        </Text>
        <Text type="h6" bold>
          Headline-Text 6
        </Text>
        <Text type="lead">
          Lead : Silver mist suffused the deck of the ship.
        </Text>
        <Text type="p">
          P : By the same illusion which lifts the horizon of the sea to the
          level of the spectator on a hillside, the sable cloud beneath was
          dished out, and the car seemed to float in the middle of an immense
          dark sphere, whose upper half was strewn with silver. Looking down
          into the dark gulf below, I could see a ruddy light streaming through
          a rift in the clouds.
        </Text>
      </div>
    </TypographyContainer>
  );
};

export default Typography;
