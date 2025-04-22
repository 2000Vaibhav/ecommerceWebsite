import React from 'react'
import { useAppSelector, useAppDispatch } from "../../apps/hooks";

const SummaryAboutProduct = () => {
  const { getAddToCardData } = useAppSelector((state) => state.cardData);
  const dispatch = useAppDispatch();
 const totalPrice: number =  getAddToCardData?.reduce((accum, currnt) => accum + currnt.price,0)
 return (
    <aside className='border border-gray-500 rounded-md p-2'>
      <p className='text-sm text-black dark:text-green-600 font-nunito font-light '>Summary  </p>
      <p className='text-sm text-black dark:text-green-600 font-nunito font-light'>No. of item:  {getAddToCardData.length}</p>
      <p className='text-sm text-black dark:text-green-600 font-nunito font-light'>Total amount:  {totalPrice}</p>  
    </aside>    
  )
}

export default SummaryAboutProduct
