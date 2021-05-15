import styled from "styled-components";
let marked = require("marked");

const Container = styled.div`
  font-size: 1.6rem;
  font-family: Droid;
  img {
    max-width: 100%;
    width: 100%;
  }
  h1 {
    font-size: 5.3rem;
    line-height: 1.15em;
    margin: 1rem 0;
  }
  h2 {
    font-size: 3.6rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  h3 {
    font-size: 2.5rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  h4 {
    font-size: 1.8rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  b,
  strong {
    font-weight: 700;
  }
  h5 {
    font-size: 1.7rem;
    line-height: 1.55em;
    margin: 1rem 0;
  }
  h6 {
    font-size: 1.3rem;
    line-height: 1.5em;
    font-weight: 500;
    margin: 1rem 0;
  }
  p {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin: 1em 0;
  }
  ul {
    list-style-type: disc;
  }
  ul,
  ol {
    padding-left: 2.5rem;
    margin: 1rem 0;
  }
  li {
    margin-bottom: 5px;
  }
  code {
    background: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.dark[1]};
    border-radius: 0.4rem;
    max-width: 100%;
    overflow-wrap: break-word;
    padding: 0.2rem 0.25rem;
  }
  a {
    color: ${({ theme }) => theme.colors.blue[1]};
  }
  pre {
    display: block;

    code {
      display: block;
      background: ${({ theme }) => theme.colors.dark[1]};
      color: ${({ theme }) => theme.colors.light[1]};
      padding: 1rem;
      border-radius: 0.6rem;
      margin: 1rem 0;
      width: 100%;
      max-width: 100%;
      overflow-x: auto;
    }
  }
`;

const Previewer = ({ content }) => {
  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(content),
        }}
      ></div>
    </Container>
  );
};
export default Previewer;
