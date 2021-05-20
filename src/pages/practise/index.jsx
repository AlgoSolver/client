//import Button from "../../components/button/";
import {  Switch, Route, Redirect } from "react-router-dom";
//import Box from "../../components/box/";
import { useQuery } from "../../hooks/";
import Tracks from "./elements/tracks";
import Loading from "../../shared/loading/";
import TrackDocs from "./elements/track-docs";
const Practise = () => {
  const { data, isLoading } = useQuery("tracks", "/track");
  console.log(data, "heloo");
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
  if (isLoading) return <Loading />;
  return null;

  // return (
  //   <div className="wrapper">
  //     <div className="center">
  //       <Box
  //         m="4rem 0"
  //         width="30rem"
  //         center
  //         shadow={2}
  //         radius="1rem"
  //         height="20rem"
  //       >
  //         <Link to="/create-problem">
  //           <Button>Createss Problem</Button>
  //         </Link>
  //       </Box>
  //     </div>
  //   </div>
  // );
};

export default Practise;
