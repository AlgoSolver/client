import { Helmet } from "react-helmet";

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
     {description ? <meta name="description" content={description} />:null}
    </Helmet>
  );
};

export default Head;
