import React from 'react'
import NavBar from './NavBar'
import AddToCard from './cardComponent/AddToCard'

const AddToCardComponent = () => {
  return (
    <>
    <NavBar/>
    <div className='text-center font-semibold text-green-600 w-full h-[95vh]  bg-white dark:bg-black'>
      <AddToCard/>
    </div>

    </>
  )
}

export default AddToCardComponent
