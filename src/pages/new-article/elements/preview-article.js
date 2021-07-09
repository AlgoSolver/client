import ArticlePreview from "../../../components/article-previewer/";


const Preview = () => {
  const header = localStorage.getItem("9753-header");
  const tags = localStorage.getItem("9753-tags");
  const content = localStorage.getItem("9753-content");
  return <ArticlePreview data={{
    header,
    tags,
    content
  }} />
};

export default Preview;