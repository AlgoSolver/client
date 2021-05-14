import Button from "../../components/button/";
import { Link } from "react-router-dom";
import Box from "../../components/box/";
import {useQuery} from "../../hooks/";
import Tracks from './elements/tracks';

const Practise = () => {
  const {data} = useQuery('tracks',"/track");
  console.log(data,"heloo")
  if(data?.length){
    return <div className="wrapper">
      <Tracks tracks={data} />
      </div>
  }
  return (
    <div className="wrapper">
      <div className="center">
        <Box
          m="4rem 0"
          width="30rem"
          center
          shadow={2}
          radius="1rem"
          height="20rem"
        >
          <Link to="/create-problem">
            <Button>Createss Problem</Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default Practise;
