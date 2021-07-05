import { Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "../../hooks/";
import Tracks from "./elements/tracks";
import Loading from "../../shared/loading/";
import TrackDocs from "./elements/track-docs";
import Head from '../../components/head/'

const PractiseRoutes = ({ data }) => {
  return (
    <Routes>
      <Route path="" element={<Tracks tracks={data} />} />
      <Route path=":track" element={<TrackDocs />} />
      <Route exact path=":track/:topic/:subject" element={<TrackDocs />} />
      <Route path="*" element={<Navigate to="/practise" />} />
    </Routes>
  );
};
const Practise = () => {
  const { data, isLoading } = useQuery("tracks", "/track");
  if (data?.length) {
    return (
      <div className="wrapper">
        <Head title="Practise with AlgoSolver" />
        <PractiseRoutes data={data} />
      </div>
    );
  }
  if (isLoading) return <Loading />;
  return null;
};
export default Practise;