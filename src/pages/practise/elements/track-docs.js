import styled from "styled-components";
import Text from "../../../components/Text";
import { Divider } from "../../../components/divider";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useQuery } from "../../../hooks/";
import Loading from "../../../shared/loading/";
import { Spinner } from "../../../components/spinner";
import { ArrowDown2, ArrowUp2 } from "../../../assets/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RenderedMarkdown } from "../../../components/markdown-previewer";

const DocsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
const SubjectDescriptionContainer = styled.div`
  flex: 1;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[3].shadow};
  padding: 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;
const SidebarContainer = styled.div`
  padding: 1rem;
  min-width: 25rem;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .subject {
    color: ${({ theme }) => theme.colors.dark[2]};
    font-size: 1.5rem;
    display: inline-block;
    &:hover {
      color: ${({ theme }) => theme.colors.blue[0]};
    }
    &.active {
      color: ${({ theme }) => theme.colors.blue[0]};
    }
  }
  .subject-container {
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
  }
`;
const RenderSubjecs = ({ name, trackName, topicName }) => {
  return (
    <NavLink
      to={`/practise/${trackName}/${topicName}/${name}`}
      className="subject"
    >
      {name}
    </NavLink>
  );
};
const Topic = ({ topic, trackName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row-container">
      <div className="row" onClick={() => setIsOpen((e) => !e)}>
        <Text type="h5" layer={1} transform="capitalize">
          {topic.name}
        </Text>
        {isOpen ? <ArrowUp2 /> : <ArrowDown2 />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -10,
              opacity: 0,
            }}
          >
            <div className="subject-container">
              {topic.subjects.map((subject) => (
                <RenderSubjecs
                  trackName={trackName}
                  topicName={topic.name}
                  name={subject.name}
                  key={subject._id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Divider mg=".4rem 0" />
    </div>
  );
};
const SideBar = ({ topics, trackName }) => {
  return (
    <SidebarContainer>
      {topics.map((topic) => (
        <Topic trackName={trackName} topic={topic} />
      ))}
    </SidebarContainer>
  );
};
const SubjectDescription = ({ topic, track, isFullPath, main }) => {
  const { subject } = useParams();

  const { isLoading, data } = useQuery(
    ["subject", subject],
    "/subject/" + subject
  );
  console.log(data);
  return (
    <SubjectDescriptionContainer>
      {isLoading ? (
        <Spinner size="5rem" />
      ) : (
        <RenderedMarkdown content={data.description} />
      )}
    </SubjectDescriptionContainer>
  );
};
const Docs = ({ trackName, topics }) => {
  return (
    <>
      <Text type="h2" bold layer="1" transform="capitalize">
        {trackName}
      </Text>

      <DocsContainer>
        <SideBar topics={topics} trackName={trackName} />
        <SubjectDescription />
      </DocsContainer>
    </>
  );
};

const TrackDocs = () => {
  const { track, topic, subject } = useParams();
  const history = useHistory();
  const { data, isLoading } = useQuery(
    ["track", track],
    "/topic/" + track,
    "get"
  );
  let isFullPath = false;
  if (topic && subject) isFullPath = true;
  if (data?.length && !isFullPath && !isLoading)
    history.push(
      `/practise/${track}/${data[0]?.name || "null"}/${
        data[0]?.subjects[0]?.name || "null"
      }`
    );
  if (isLoading) return <Loading />;
  if (data?.length || data?.length === 0)
    return <Docs trackName={track} topics={data} />;
  return (
    <Text type="h1" center mg="2rem 0">
      Not Found {track}
    </Text>
  );
};

export default TrackDocs;
