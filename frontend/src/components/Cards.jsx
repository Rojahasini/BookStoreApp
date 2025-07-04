import React from "react";

function Cards({ item }) {
  if (!item) {
    return null; // gracefully ignore undefined
  }

  return (
    <>
      <div >
        <div className="card bg-base-200 border border-base-300 w-full shadow-md hover:scale-105 duration-200 ">
          <figure>
            <img
              src={item.image}
              alt={item.name || "no name"}
              className="w-full h-52 object-cover"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-desc">
              {item.name}

              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p>{item.desc}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline  btn cursor-pointer hover:bg-pink-500 hover:text-white py-3 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
