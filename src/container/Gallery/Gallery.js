import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";
import images from "../../constants/images";

const Gallery = () => {
  const scrollRef = useRef();
  const scroll = (Direction) => {
    //get value of direction which is clicked using ref
    const { current } = scrollRef;
    console.log(current, Direction, current.scrollLeft);
    if (Direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const AllImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery section__padding flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          illo ab fugit quis perferendis animi quae suscipit, quo similique ex!
        </p>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          {" "}
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {AllImages.map((e, i) => (
            <div className="app__gallery-images-card flex__center" key={i}>
              <img src={e} alt="gallery" />
              <BsInstagram className="app__gallery-images-card-insta" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
