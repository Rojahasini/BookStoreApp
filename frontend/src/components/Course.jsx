import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> here!</span>
          </h1>
          <p className="mt-12">
            Discover a world of knowledge and inspiration at our carefully
            curated bookstore, where every book is chosen to enrich your mind
            and bring peace to your soul. From timeless classics to fresh new
            voices, we offer a space where you can explore, learn, and unwind
            with confidence. Relax and browse knowing you’re in good hands —
            your peace of mind is our priority.
          </p>

          <Link to="/">
            <button className="btn  bg-pink-500 text-white px-4 py-2 mt-6  cursor-pointer rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
