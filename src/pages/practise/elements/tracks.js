import styled from "styled-components";
import Text from "../../../components/Text";
import { Divider } from "../../../components/divider";
import { Link } from "react-router-dom";

const TracksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  align-content: flex-start;
  justify-content: center;
`;

const TrackContainer = styled(Link)`
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.elevation[3].shadow};
  background: ${({ theme }) => theme.colors.light[4]};
  max-width: 22rem;
  width: 100%;
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      max-width: 150px;
      width: 100%;
    }
  }
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.elevation[5].shadow};
    transform: translateY(-1px);
  }
`;

const Track = ({ track }) => {
  return (
    <TrackContainer to={`/practise/${track.name}`}>
      <div className="row">
        <img src={track.img_url} alt={track.name} />
        <Text transform="capitalize" mg="1rem 0 0 0" type="h5" bold layer={1}>
          {track.name}
        </Text>
      </div>
      <Divider mg="1rem 0" />
      <Text type="p" layer={2} size="1.4rem">
        {track.description}
      </Text>
    </TrackContainer>
  );
};
const Tracks = ({ tracks }) => {
  return (
    <>
      <Text type="h1" layer="1" mg="2rem 0" bold>
        Tracks
      </Text>
      <TracksContainer>
        {tracks.map((track) => (
          <Track track={track} key={track._id} />
        ))}
      </TracksContainer>
    </>
  );
};
export default Tracks;
