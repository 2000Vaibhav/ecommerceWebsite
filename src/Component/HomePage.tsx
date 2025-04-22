import React from 'react'
import NavBar from './NavBar'
import ProductList from './cardComponent/ProductList'
import ProductHeader from './cardComponent/ProductHeader'
import { TranslateText } from '../utils/Translate'

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className='text-center font-semibold text-green-600 w-full h-[95vh]  bg-white dark:bg-black'>
      <ProductHeader/>
      <ProductList/>
    </div>

    </>

  )
}

export default HomePage
