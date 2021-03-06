import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

import style from "./slider.css";

const SliderTemplate = props => {
  let template = null;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    ...props.settings 
  };

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div
                className={style.featured_img}
                style={{
                  background: `url(../images/articles/${item.image})`
                }}
              >
                <Link to={`/articles/${item.id}`}>
                  <div className={style.featured_caption}>{item.title}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplate;
