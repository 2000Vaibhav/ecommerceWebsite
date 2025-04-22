import React from "react";
import { useAppSelector, useAppDispatch } from "../../apps/hooks";
import { Tooltip } from "@mui/material";
import SummaryAboutProduct from "./SummaryAboutProduct";

const AddToCard = () => {
  const { getAddToCardData } = useAppSelector((state) => state.cardData);
  return (
    <>
      <section className="grid md:grid-cols-4 gap-4  grid-cols-1 bg-white dark:bg-black">
        <div className="grid md:grid-cols-2 gap-4  grid-cols-1 h-[70vh] overflow-y-auto no-scrollbar col-span-3">
          {Boolean(getAddToCardData) && getAddToCardData.length > 0 ? (
            getAddToCardData?.map((items, index) => {
              return (
                <div
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
           dark:bg-gray-800 dark:border-gray-700  my-2 "
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

                  <button
                    className=" dark:bg-green-400 font-semibold
                 text-white  bg-blue-500 hover:bg-blue-600
                py-1 px-4  text-sm  rounded "
                    // onClick={() => dispatch(updateAddToCardData(items))}
                  >
                    +
                  </button>

                  <button
                    className=" dark:bg-green-400 font-semibold
                 text-white  bg-blue-500 hover:bg-blue-600
                py-1 px-4  text-sm  rounded "
                    // onClick={() => dispatch(updateAddToCardData(items))}
                  >
                    -
                  </button>

                  <button
                    className="bg-red-500 font-semibold
                 text-white  hover:bg-red-600
                py-1 px-4  text-sm  rounded "
                    // onClick={() => dispatch(updateAddToCardData(items))}
                  >
                    Remove
                  </button>
                </div>
              );
            })
          ) : (
            <>
            <p className=" text-white text-center flex justify-center text-[34px]">There is no  product </p>
            </>
          )}
        </div>
        {Boolean(getAddToCardData) && getAddToCardData.length > 0 && 
          <SummaryAboutProduct />
          
        }

      </section>
    </>
  );
};

export default AddToCard;
