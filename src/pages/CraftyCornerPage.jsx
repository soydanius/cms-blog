import "./CategoryPage.css";
import Header from "../Header";
import ExtendedBlogPost from "../ExtendedBlogPost";

const CraftyCornerPage = ({ blogPosts, extBlogPosts }) => {
  return (
    <>
      <Header />
      <h1 className="category-title">Crafty Corner</h1>
      {/* Blog posts props require blogPosts and index of the specific Blog Post */}
      <div>
        <ExtendedBlogPost extBlogPosts={extBlogPosts} i={2} />
        <ExtendedBlogPost extBlogPosts={extBlogPosts} i={1} />
      </div>
    </>
  );
};

export default CraftyCornerPage;
