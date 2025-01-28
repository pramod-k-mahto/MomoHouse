import momoPlate from "../../assets/images/momoPlate.png";

import circle from "../../assets/images/circle.png";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
  };
  const filterItems = (country) => {
    const newItems = product.filter((item) => {
      return item.cuisine === country;
    });

    setFilterProduct(newItems);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="flex justify-end ">
        <div className="w-[40%] border-2 border-red-700 mr-28">text</div>
        <div className="w-[40%] border-2 border-red-700  relative overflow-hidden ">
          <img
            src={momoPlate}
            alt=""
            className="relative h-40 top-16 z-10 left-48 "
          />
          <img
            src={circle}
            alt=""
            className="relative h-96 -top-48 left-[309px]"
          />
        </div>
      </div>

      <div className="border-2 border-red-500 flex justify-center gap-y-9 items-center flex-col p-5 ">
        <div
          className="border-2 border-red-500  w-[70%]  flex flex-col items-center 
        justify-center "
        >
          <h1 className=" text-2xl">
            Our <span className="text-red-500  ">Most Popular</span> Recipes
          </h1>
          <p>
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="border-2 border-red-500 flex  gap-x-10 justify-center w-[70%]">
          <button
            onClick={() => {
              filterItems("Italian");
            }}
            className="border-2 border-black rounded-full px-3"
          >
            Italian
          </button>
          <button
            onClick={() => {
              filterItems("Pakistani");
            }}
            className="border-2 border-black rounded-full px-3"
          >
            Pakistani
          </button>
          <button
            onClick={() => {
              filterItems("Russian");
            }}
            className="border-2 border-black rounded-full px-3"
          >
            Russian
          </button>
        </div>
        <div className="border-2 border-red-500 w-[70%]">
          {/* {console.log(filterProduct)} */}

          {filterProduct.length > 0 ? (
            <div className=" flex  flex-wrap gap-11">
              {filterProduct.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="h-44 w-52 shadow-xl flex  flex-wrap items-center justify-center shadow-slate-300"
                  >
                    <img src={item.image} className="h-16" alt="" />
                    <p>{item.name}</p>
                    <p>Rs.{item.caloriesPebrServing}</p>
                  </div>
                );
              })}
            </div>
          ) : product.length > 0 ? (
            <div className="flex flex-wrap gap-10 justify-center items-center py-10 ">
              {product.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="h-44 w-52 shadow-xl flex flex-col items-center
                   justify-center shadow-slate-300"
                  >
                    <img src={items.image} className="h-16" alt="" />
                    <p>{items.name}</p>
                    <p>Rs.{items.caloriesPerServing}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Loading.....</p>
          )}
        </div>

        <button className="bg-green-950 text-white py-3 w-44 rounded-full px-3">
          Explore Our Menu
        </button>
      </div>
    </>
  );
}

export default Home;
