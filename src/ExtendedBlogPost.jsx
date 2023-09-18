import React from 'react';
import { useState, useEffect } from 'react';

const ExtendedBlogPost = (props) => {
  const {extBlogPosts, i} = props;
  const [extDate, setExtDate] = useState('');
   
 

  useEffect(()=> {
    Object.keys(extBlogPosts).length === 0 ? setExtDate('') : setExtDate(extBlogPosts[i].fields.date)
  });
  const extBlogDate = new Date(extDate);
  const extBlogYear = extBlogDate.getFullYear();
  const extBlogMonth = extBlogDate.getMonth()+1;
  const extBlogDay = extBlogDate.getDate();


  //console.log(extBlogPosts);
  
  
  
    return (  
     
      <>
          {Object.keys(extBlogPosts).length == 0 ? "... Loading" : 

            <div className="extendedBlogPost" key={extBlogPosts[i].sys.environment.id}>
            <h2>{extBlogPosts[i].fields.extendedBlogPostTitle}</h2>
            <time date={extBlogDate}>First published: {extBlogYear}-{extBlogMonth}-{extBlogDay}</time>

            {extBlogPosts[i].fields.pictures.length===0? "Loading media" : extBlogPosts[i].fields.pictures.map(
              (j)=>(
                <img src={j.fields.file.url} alt={j.fields.title} key={j.sys.id}/>
              ))
            }
            <span> {extBlogPosts[i].fields.textblock.content[0].content[0].value}</span>

            <hr />

            {!extBlogPosts[i].fields.additionalTextBlock ? console.log("no content") : extBlogPosts[i].fields.additionalTextBlock.content.map(
              (j)=>
              <span>{j.content[0].value}</span>
            )
            } 
    
            </div>
          } 
      </>
    )
}
  

export default ExtendedBlogPost;