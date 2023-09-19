import "./CategoryPage.css";
import Header from "../Header";
import ExtendedBlogPost from "../ExtendedBlogPost";

const CookingWithKidsPage = ({ blogPosts, extBlogPosts }) => {
  return (
    <>
      <Header />
      <h1 className="category-title">Cooking with Kids</h1>
      {/* Blog posts props require blogPosts and index of the specific Blog Post */}
      <div>
        <ExtendedBlogPost extBlogPosts={extBlogPosts} i={0} />
        <ExtendedBlogPost extBlogPosts={extBlogPosts} i={3} />
      </div>
    </>
  );
};

export default CookingWithKidsPage;
