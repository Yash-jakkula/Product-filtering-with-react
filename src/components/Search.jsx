import React, { useContext, useEffect } from "react";
import { Context } from "../context/OrderContext";
import { useSelector } from "react-redux";

export default function SearchComponent() {
  const { searchItem, setShow, catag } = useContext(Context);
  const [mappedData, setMappedData] = React.useState([]);
  const data = useSelector((state) => state.product);
  useEffect(() => {
    if (searchItem) {
      setShow(true);
      const regex = new RegExp(searchItem, "i");
      const filteredData = data.filter(
        (item) => regex.test(item.title) || regex.test(item.category)
      );
      setMappedData(filteredData);
      console.log(filteredData);
    } else {
      setShow(false);
      setMappedData([]);
    }
  }, [searchItem, setShow, catag, data]);

  return (
    <>
      {mappedData.map((product) => (
        <div
          className="bg-white shadow-md mb-3 rounded-lg max-w-4xl mx-auto p-6"
          key={product?.id}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          <div className="flex flex-col md:flex-row">
            <div className="flex-none w-full md:w-1/3">
              <img
                src={product.images[0]}
                alt="Product"
                className="w-full rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 md:ml-6">
              <p className="text-3xl font-semibold text-green-600 mt-4 md:mt-0">
                ${product.price}
              </p>

              <div className="flex items-center my-2">
                <div className="flex text-yellow-500">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.284 3.943a1 1 0 00.95.69h4.196a1 1 0 01.616 1.79l-3.396 2.465a1 1 0 00-.364 1.118l1.284 3.943a1 1 0 01-1.538 1.118l-3.396-2.465a1 1 0 00-1.176 0l-3.396 2.465a1 1 0 01-1.538-1.118l1.284-3.943a1 1 0 00-.364-1.118L2.203 9.35a1 1 0 01.616-1.79h4.196a1 1 0 00.95-.69l1.284-3.943z"></path>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">
                  {product.rating} out of 5 stars
                </p>
              </div>

              <p className="text-gray-700 my-4">{product.description}</p>

              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
