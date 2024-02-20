import "./BlogSlider.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Card, Image } from "semantic-ui-react";

function BlogSlider(props) {
  const { allBlogPosts } = props;

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
  const slides = [0, 1, 2, 3, 4, 5];
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

  //console.log(allBlogPosts)

  return (
    <div className="BlogSlider">
      <Slider className="Slider" {...settings}>
        {slides.map((index) => (
          <div
            key={slides[index]}
            className={index === slidesIndex ? "slide activeSlide" : "slide"}
          >
            <Card className="card">
              <Image
                className="cardImage"
                src={
                  allBlogPosts.length === 0
                    ? "... Loading"
                    : allBlogPosts[index].image
                }
                wrapped
                ui={false}
              />
              <Card.Content className="cardContent">
                <Card.Header style={{ color: " #47b5d0" }}>
                  {allBlogPosts.length === 0
                    ? "... Loading"
                    : allBlogPosts[index].title}
                </Card.Header>
                <Card.Meta className="metaLink">
                  <a
                    className="link"
                    href={
                      allBlogPosts.length === 0
                        ? "... Loading"
                        : allBlogPosts[index].category === "crafty_corner"
                        ? "crafty-corner"
                        : allBlogPosts[index].category === "playtime_ideas"
                        ? "playtime-ideas"
                        : "cooking-with-kids"
                    }
                  >
                    Read more in this category...
                  </a>
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogSlider;
