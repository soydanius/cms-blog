import "./BlogSlider.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Card, Image } from 'semantic-ui-react';


const slides = [0, 1, 2, 3];

function BlogSlider(props) {

  const {extBlogPosts} = props;
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [slidesIndex, setSlidesIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlidesIndex(next),
  };

  
console.log(extBlogPosts)
  return (
    <div className="BlogSlider">
      <Slider {...settings}>
      {/* {Object.keys(extBlogPosts).length === 0 ? "... Loading" : */}
          {slides.map((index) => (
        <div className={index === slidesIndex ? "slide activeSlide" : "slide"}>
          <Card className="card" >
          <Image src={Object.keys(extBlogPosts).length === 0 ? "... Loading" : extBlogPosts[index].fields.pictures[0].fields.file.url} wrapped ui={false} />
          <Card.Content>
          <Card.Header>{Object.keys(extBlogPosts).length === 0 ? "... Loading" :extBlogPosts[index].fields.extendedBlogPostTitle}</Card.Header>
          <Card.Meta>
          <a href={(index>2 || index<1)? "cooking-with-kids": "crafty-corner"}>Read more in this category...</a>
          </Card.Meta>
          </Card.Content>
          </Card> 
        </div>
        ))
         }
      </Slider>
    </div>
  );
}

export default BlogSlider;