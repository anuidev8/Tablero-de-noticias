import React, { Component } from "react";

import Category from './Category'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const categorys = [
  {
    title: 'Acreditación',
    color: "#a2e07b"

  }, {
    title: '"Noticias',
    color: "#6be2fd"
  },
  {
    title: "Egresados",
    color: "#ece177"
  },
  {
    title: "Cultura",
    color: "#eb5454"
  }
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};
const CategorySilder = () => {
  return (
    <>


      {/* <Carousel responsive={responsive} showDots={false} arrows={false}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel> */}
      <div className="d-flex slider">
        <div className="slider-item d-flex ">
          {
            categorys.map((item, key) => (
              <Category key={key} title={item.title} color={item.color} />
            ))
          }

        </div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
      </div>

      <style jsx>{`

        .slider{
          overflow: auto;
          flex: none;
          justify-content: space-between;
          padding: 1em;
          width: 100%;
          flex-flow: row nowrap;
          scroll-snap-type: none;

          /* scroll-snap-type: x mandatory; */

        }

        .slider::-webkit-scrollbar {
            display: none;
          }
        .slider-item{
          text-align: center;
          flex: none;
          width: 100%;
          height: 22px;
        }

      `}</style>
    </>

  )

}

export default CategorySilder

