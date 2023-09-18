import "./categoryPage.css";
import Header from "../Header";

const PlaytimeIdeasPage = ({ blogPosts, extBlogPosts }) => {
  return (
    <>
      <Header />
      <div>
        <h1 className="category-title">Playtime Ideas</h1>
      </div>
      {/* Blog posts props require blogPosts and index of the specific Blog Post */}
    </>
  );
};

export default PlaytimeIdeasPage;
