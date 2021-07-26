import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

let marked = require("marked");

const Container = styled.div`
  font-size: 1.6rem;
  font-family: Droid;
  img {
    max-width: 100%;
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: : 1.6rem;
    color:${({ theme }) => theme.colors.dark[0]};
  }
  h2 {
    font-size: 3.2rem;
    color:${({ theme }) => theme.colors.dark[0]};
    line-height: 1.1;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  h3 {
    font-size: 2.3rem;
    color:${({ theme }) => theme.colors.dark[0]};
    line-height: 1.1;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.8rem;
    line-height: 1.1;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  b,
  strong {
    font-weight: 700;
  }
  h5 {
    font-size: 1.7rem;
    line-height: 1.1;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1.3rem;
    line-height: 1.1;
    font-weight: 500;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  p {
    font-style: normal;
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: : 2rem 0;
    color:${({ theme }) => theme.colors.dark[1]};
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
const GithubContainer = styled.div`
  body {
    font-family: Droid, arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 30px;
    color: #333;
  }

  body > *:first-child {
    margin-top: 0 !important;
  }

  body > *:last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: #4183c4;
    text-decoration: none;
  }

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
  }

  h2:first-child,
  h1:first-child,
  h1:first-child + h2,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 4rem;
    color: black;
  }

  h2 {
    font-size: 3.2rem;
    border-bottom: 1px solid #cccccc;
    color: black;
  }

  h3 {
    font-size: 2.3rem;
  }

  h4 {
    font-size: 1.9rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  h6 {
    color: #777777;
    font-size: 1.4rem;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 15px 0;
    font-size: 1.6rem;
  }

  hr {
    border: 0 none;
    color: #cccccc;
    height: 4px;
    padding: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
    font-family: MonoLisa;
    color: #f2f2f2;
  }

  .highlight pre {
    background-color: rgb(45, 45, 45);
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #1D1F21;
    border: 1px solid #cccccc;
    font-size: 1.4rem;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
    font-family: MonoLisa;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }
`;

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export const RenderedMarkdown = ({ content }) => (
  <GithubContainer>
    <ReactMarkdown children={content} components={components} />
  </GithubContainer>
);

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
