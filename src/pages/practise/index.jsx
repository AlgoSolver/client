import { Switch, Route, Redirect } from "react-router-dom";
import { useQuery } from "../../hooks/";
import Tracks from "./elements/tracks";
import Loading from "../../shared/loading/";
import TrackDocs from "./elements/track-docs";
import Message from '../../components/message'
const Practise = () => {
  const { data, isLoading,error,isError } = useQuery("tracks", "/track");

  if (isLoading) return <Loading />;
  if(isError) return <Message subTitle={error.messgae} />
  if (data?.length) {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/practise/:track">
            <TrackDocs />
          </Route>
          <Route exact path="/practise/:track/:topic/:subject">
            <TrackDocs />
          </Route>
          <Route path="/practise">
            <Tracks tracks={data} />
          </Route>
          <Redirect to="/practise" />
        </Switch>
      </div>
    );
  }
  return null;
};

export default Practise;
