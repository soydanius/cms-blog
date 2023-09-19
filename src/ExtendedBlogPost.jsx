import React from "react";
import { useState, useEffect } from "react";
import "/src/pages/CategoryPage.css";

const ExtendedBlogPost = (props) => {
  const { extBlogPosts, i } = props;
  const [extDate, setExtDate] = useState("");

  useEffect(() => {
    Object.keys(extBlogPosts).length === 0
      ? setExtDate("")
      : setExtDate(extBlogPosts[i].fields.date);
  });
  const extBlogDate = new Date(extDate);
  const extBlogYear = extBlogDate.getFullYear();
  const extBlogMonth = extBlogDate.getMonth() + 1;
  const extBlogDay = extBlogDate.getDate();

  //console.log(extBlogPosts);

  return (
    // <>
    //   {Object.keys(extBlogPosts).length == 0 ? (
    //     "... Loading"
    //   ) : (
    //     <div
    //       className="extendedBlogPost"
    //       key={extBlogPosts[i].sys.environment.id}
    //     >
    //       <h2>{extBlogPosts[i].fields.extendedBlogPostTitle}</h2>
    //       <time date={extBlogDate}>
    //         First published: {extBlogYear}-{extBlogMonth}-{extBlogDay}
    //       </time>

    //       {extBlogPosts[i].fields.pictures.length === 0
    //         ? "Loading media"
    //         : extBlogPosts[i].fields.pictures.map((j) => (
    //             <img
    //               src={j.fields.file.url}
    //               alt={j.fields.title}
    //               key={j.sys.id}
    //             />
    //           ))}
    //       <p> {extBlogPosts[i].fields.textblock.content[0].content[0].value}</p>

    //       <hr />

    //       {!extBlogPosts[i].fields.additionalTextBlock
    //         ? console.log("no content")
    //         : extBlogPosts[i].fields.additionalTextBlock.content.map((j) => (
    //             <span>{j.content[0].value}</span>
    //           ))}
    //     </div>
    //   )}
    // </>
    <>
      {Object.keys(extBlogPosts).length === 0 ? (
        "... Loading"
      ) : (
        <div
          className="blog-post-container"
          key={extBlogPosts[i].sys.environment.id}
        >
          <div className="blog-post-left">
            <img
              src={
                extBlogPosts[i].fields.pictures.length === 0
                  ? ""
                  : extBlogPosts[i].fields.pictures[0].fields.file.url
              }
              alt={extBlogPosts[i].fields.extendedBlogPostTitle}
              className="blog-post-image"
            />
            <time date={extBlogDate} className="blog-post-time">
              First published: {extBlogYear}-{extBlogMonth}-{extBlogDay}
            </time>
          </div>
          <div className="blog-post-right">
            <h2 className="blog-post-title">
              {extBlogPosts[i].fields.extendedBlogPostTitle}
            </h2>
            <p className="blog-post-text">
              {extBlogPosts[i].fields.textblock.content[0].content[0].value}
            </p>
            <hr />
            {!extBlogPosts[i].fields.additionalTextBlock
              ? console.log("no content")
              : extBlogPosts[i].fields.additionalTextBlock.content.map(
                  (j, index) => (
                    <span className="blog-post-text" key={index}>
                      {j.content[0].value}
                    </span>
                  )
                )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExtendedBlogPost;
