import React, { useState } from "react";
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const images = [
  {
    id: 1,
    url: "https://res.cloudinary.com/the-webdev/image/upload/v1657049514/uploads/19dec03-1_rqneek.jpg",
  },

  {
    id: 2,
    url: "https://res.cloudinary.com/the-webdev/image/upload/v1657049447/uploads/f7e216087b2cbe7dde6fc31720bf1b00_ef6rdt.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/the-webdev/image/upload/v1657049238/uploads/FC6CzGPWUAQFFGa_gqant4.jpg",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowCont}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <BsChevronCompactLeft size="12rem" color="white" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image) => (
          <div className={styles.imgCont} key={image.id}>
            <Image src={image.url} layout="fill" alt="" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowCont}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <BsChevronCompactRight size="12rem" color="white" />
      </div>
    </div>
  );
};

export default Slider;
