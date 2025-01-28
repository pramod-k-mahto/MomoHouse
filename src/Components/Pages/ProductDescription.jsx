import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
function ProductDescription() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  const { product_id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  console.log(product_id);
  const getSingleProduct = async () => {
    let productData = await fetch(
      `https://dummyjson.com/recipes/${product_id}`
    );
    productData = await productData.json();
    setSingleProduct(productData);
    console.log(productData);
  };
  useEffect(() => {
    getSingleProduct();
  }, [product_id]);

  return (
    <div>
      {singleProduct ? (
        <div>
          <div className="flex m-auto  mt-16  border-2 w-[90%]  ">
            <div className="border-2 border-red-500  w-96 h-60  ">
              <img className="w-72 h-60  " src={singleProduct.image} alt="" />
            </div>
            <div className="border-2 border-red-500  w-96  space-y-2 pl-4 ">
              <h1 className="text-2xl">{singleProduct.name}</h1>
              <h1 className="text-lg">Rs.{singleProduct.caloriesPerServing}</h1>
              <h1 className="text-lg">{singleProduct.rating}</h1>
              <div>
                <button className="bg-slate-400  p-1 w-6 rounded ">-</button>
                <span>1</span>
                <button className="bg-slate-400 p-1 w-6  rounded">+</button>
              </div>

              <div className="border-2 space-x-3 ">
                <button className="bg-orange-500 py-2 px-8 rounded-3xl">
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    dispatch({type:"AddToCart",payload:singleProduct});
                  }}
                  className="bg-orange-500 py-2 px-8  rounded-3xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 border-green-500">Desc.</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;
