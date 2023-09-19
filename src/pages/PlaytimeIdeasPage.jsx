import "./CategoryPage.css";
import Header from "../Header";
import BlogPost from "../BlogPost";
import ExtendedBlogPost from "../ExtendedBlogPost";

const PlaytimeIdeasPage = ({ blogPosts, extBlogPosts }) => {
  return (
    <>
      <Header />
      <div>
        <h1 className="category-title">Playtime Ideas</h1>
      </div>
      {/* Blog posts props require blogPosts and index of the specific Blog Post */}
      <div>
        <BlogPost blogPosts={blogPosts} i={0} />
        <BlogPost blogPosts={blogPosts} i={1} />
      </div>
    </>
  );
};

export default PlaytimeIdeasPage;
