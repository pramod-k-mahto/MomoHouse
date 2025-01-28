import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  const [product, setProduct] = useState([]);
  
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    setProduct(response.recipes);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {product.length > 0 ? (
        <div className=" flex w-[90%] mt-10 p-4 m-auto gap-10 flex-wrap justify-center  ">
          {product.map((items) => {
            return (
              <div
                key={items.id}
                className="w-52 h-52   shadow-md shadow-slate-500  flex items-center justify-center  flex-col"
              >
                <NavLink to={`/productDescription/${items.id}`}>
                  <img
                    className="h-20 "
                    src={items.image}
                    alt="Product_Image"
                  />
                  <h1>{items.name}</h1>
                  <p>Rs.{items.caloriesPerServing}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className=" shadow mt-20 rounded-md p-4  w-[884px] mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-900 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2  bg-slate-900 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-900 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-900 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-900 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
