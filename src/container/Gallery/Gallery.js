import React, { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";
import img1 from "../../assets/buddhism7.png";
import img2 from "../../assets/buddhism8.png";
import img3 from "../../assets/buddhism9.png";
import img4 from "../../assets/buddhism10.png";
const Gallery = () => {
  const scrollRef = useRef();
  const scroll = (Direction) => {
    //get value of direction which is clicked using ref
    const { current } = scrollRef;
    if (Direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const AllImages = [img1, img2, img3, img4];
  return (
    <div className="app__gallery  section__padding" id="gallery">
      <div className="app__gallery-content ">
        <SubHeading title="Buddhism All Around" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          The teachings of Gautama Buddha are followed the world over and
          practiced by monks and laymen alike.
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
            <div className="app__gallery-images-card " key={i}>
              <img src={e} alt="gallery" />
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
