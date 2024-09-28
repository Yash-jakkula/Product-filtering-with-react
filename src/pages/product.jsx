import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../state/store";
import { Button, Input } from "antd";
import Products, { ProductActions } from "../state/slices/products";
import { Content } from "antd/es/layout/layout";
import { Context } from "../context/OrderContext";
import SearchComponent from "../components/Search";
const { Search } = Input;
export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [limit, setLimit] = useState(10);
  const { searchItem, show, setSearchItem } = useContext(Context);
  console.log(searchItem, "items", show, "show");
  console.log(products);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=10");
        const json = await res.json();
        dispatch(ProductActions.setProductData(json.products));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch, loading]);
  if (loading) {
    return <div>Loading...</div>;
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const json = await res.json();
      setLimit(limit + 10);
      dispatch(ProductActions.setProductData(json.products));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(searchItem, "item");
  return (
    <div className="bg-gray-100 p-4">
      <Search
        className="flex mb-5 p-2 md:hidden flex-row items-center"
        placeholder="input search text"
        onChange={(e) => setSearchItem(e.target.value)}
        enterButton
      />

      {!searchItem ? (
        <>
          {products &&
            products.map((product) => (
              <div
                className="bg-white shadow-md mb-3 rounded-lg max-w-4xl mx-auto p-6"
                key={product?.id}
              >
                {/* Product Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>

                {/* Flex Container for Image and Info */}
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="flex-none w-full md:w-1/3">
                    <img
                      src={product.images[0]}
                      alt="Product"
                      className="w-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 md:ml-6">
                    {/* Price */}
                    <p className="text-3xl font-semibold text-green-600 mt-4 md:mt-0">
                      ${product.price}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center my-2">
                      <div className="flex text-yellow-500">
                        {/* Stars */}
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.284 3.943a1 1 0 00.95.69h4.196a1 1 0 01.616 1.79l-3.396 2.465a1 1 0 00-.364 1.118l1.284 3.943a1 1 0 01-1.538 1.118l-3.396-2.465a1 1 0 00-1.176 0l-3.396 2.465a1 1 0 01-1.538-1.118l1.284-3.943a1 1 0 00-.364-1.118L2.203 9.35a1 1 0 01.616-1.79h4.196a1 1 0 00.95-.69l1.284-3.943z"></path>
                        </svg>
                        {/* Repeat for more stars */}
                      </div>
                      <p className="ml-2 text-gray-600">
                        {product.rating} out of 5 stars
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 my-4">{product.description}</p>

                    {/* Add to Cart Button */}
                    <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Additional Product Info */}
              </div>
            ))}
          <div className="flex justify-center items-center">
            <Button variant="outline" onClick={() => fetchProducts()}>
              View More
            </Button>
          </div>
        </>
      ) : (
        <>
          <SearchComponent />
        </>
      )}
    </div>
  );
}
