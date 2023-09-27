import React from "react";
//import { createClient } from "contentful";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

// const client = createClient({
//   space: import.meta.env.VITE_SPACE_ID,
//   accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
// });

function CategoryCard() {
  // const [categoryData, setCategoryData] = useState([]);

  // useEffect(() => {
  //   client
  //     .getEntries({
  //       content_type: "categoryCard",
  //     })
  //     .then((response) => {
  //       if (response.items) {
  //         setCategoryData(response.items);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching Category Cards:", error);
  //     });
  // }, []);

  const routeNames = ["crafty-corner", "cooking-with-kids", "playtime-ideas"];

  return (
    <div className="category-card-container">
      <h1> Learn & Play!</h1>
      {/* {categoryData.map((category, index) => ( */}
        <Link to={routeNames[0]}>
          <div className="category-card">
            <img
              src="https://images.ctfassets.net/hvjzndlg2jsh/32XCG35oOyyOk1Dm9a8EXS/5fe57e8dbd2c516e7ba41c41c1ea921c/brush.png"
              alt="crafty corner icon"
            />
            <h2>Crafty Corner</h2>
          </div>
        </Link>
        <Link to={routeNames[1]}>
          <div className="category-card">
            <img
              src="https://images.ctfassets.net/hvjzndlg2jsh/7zSbSIvthbrDgmtcf4RVGO/2aa719bde34e8334c77baa2c7794769e/chef-hat.png"
              alt="cooking with kids icon"
            />
            <h2>Cooking with Kids</h2>
          </div>
        </Link>
        <Link to={routeNames[2]}>
          <div  className="category-card">
            <img
              src="https://images.ctfassets.net/hvjzndlg2jsh/8vpLL1LIIwKwy2W7gVbn3/1c6e0e8a2b52fb08d9939cd6c3aa825a/baby-toy.png"
              alt="playtime ideas"
            />
            <h2>Playtime Ideas</h2>
          </div>
        </Link>
      {/* ))} */}
    </div>
  );
}

export default CategoryCard;
