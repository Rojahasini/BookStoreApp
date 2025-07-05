import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

/* Custom arrow components */
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-10 h-10 text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded-4xl p-0.5 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M7 5l5 5-5 5V5z" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-10 h-10 text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded-4xl p-0.5 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M13 5l-5 5 5 5V5z" />
      </svg>
    </div>
  );
}

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>Try some of our free courses here!</p>
      </div>

      <div className="relative mt-4">
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="p-3">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
