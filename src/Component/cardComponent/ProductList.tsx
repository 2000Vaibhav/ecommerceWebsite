import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../apps/hooks";
import {
  fetchProducts,
  updateAddToCardData,
  updateSelectCategory,
} from "../../features/CardReducer";
import { FaRupeeSign } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import CardSkeleton from "../commun/CardSkeleton";
import ErrorPage from "../commun/ErrorPage";

const ProductList = () => {
  const {
    value,
    productList,
    selectCategory,
    loading,
    error,
    getAddToCardData,
  } = useAppSelector((state) => state.cardData);
  const dispatch = useAppDispatch();

  const productListByselectedCategory = productList.filter((product) => {
    if (product.category === selectCategory) {
      return product;
    } else if (!selectCategory || selectCategory === "all") {
      return product;
    }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <main className=" container mx-auto my-3 ">
      <h1 className="text-center pt-[4rem] pb-[1.5rem] font-lexend text-black dark:text-white text-2xl">
        Top Offer
      </h1>
      <div className="grid md:grid-cols-3 gap-4  grid-cols-1 h-[70vh] overflow-y-auto no-scrollbar" >
        {error ? (
          <>
            <ErrorPage />
          </>
        ) : loading ? (
          [...Array(10)].map((_, index) => (
            <div key={index}>
              <CardSkeleton />
            </div>
          ))
        ) : (
          productListByselectedCategory.map((items, index) => {
            return (
              <div
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
           dark:bg-gray-800 dark:border-gray-700  my-2  "
                key={index}
              >
                <img
                  src={items.image}
                  className="w-full h-[250px] object-contain "
                  alt={items.title}
                />
                {items.title.split("").length > 22 ? (
                  <Tooltip title={items.title}>
                    <p className="text-sm text-black dark:text-green-600 font-nunito font-light">
                      {`${items.title.split("").splice(0, 23).join("")}...`}
                    </p>
                  </Tooltip>
                ) : (
                  <p className="text-sm text-black dark:text-green-600 font-nunito font-light">
                    {items.title}
                  </p>
                )}

                <p className="text-lg text-gray-800 dark:text-green-600 font-nunito font-extrabold">
                  <span className="text-black dark:text-green-600">Rs</span>{" "}
                  {items.price}
                </p>

                {Boolean(getAddToCardData) &&
                getAddToCardData.length > 0 &&
                getAddToCardData.find((card) => card.id === items.id) ? (
                  <button
                    className=" dark:bg-green-400 font-semibold
                 text-white  bg-blue-500 hover:bg-blue-600
                py-1 px-4  text-sm  rounded "
                  >
                    <Link to={"/addToCard"}>GO TO CARD </Link>
                  </button>
                ) : (
                  <button
                    className=" dark:bg-green-400 font-semibold
                 text-white  bg-blue-500 hover:bg-blue-600
                py-1 px-4  text-sm  rounded "
                    onClick={() => dispatch(updateAddToCardData(items))}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default ProductList;
