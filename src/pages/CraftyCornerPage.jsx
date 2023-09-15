import "./categoryPage.css";
import Header from "../Header";

const CraftyCornerPage = ({ blogPosts, extBlogPosts }) => {
  return (
    <>
      <Header />
      <h1 className="category-title">Crafty Corner</h1>
      {/* Blog posts props require blogPosts and index of the specific Blog Post */}
    </>
  );
};

export default CraftyCornerPage;
