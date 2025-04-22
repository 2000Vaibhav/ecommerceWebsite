import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../apps/hooks'
import { fetchProducts , updateSelectCategory} from '../../features/CardReducer'


const ProductHeader = () => {
  const {value,productList, selectCategory  } = useAppSelector((state) => state.cardData)
  const dispatch = useAppDispatch()

console.log(selectCategory)

  let uniqueCategories  = [...new Set(productList.map((product)=>product.category))]
  uniqueCategories.splice(0 ,0,'all');

 
  return (
<header className=' mx-auto shadow-xl	h-[2.2rem]'>
<ul className='flex justify-center capitalize font-outfit font-extrabold '>
  {uniqueCategories.map((category,index)=>{
    return(
  <li key={index} className={`px-3 mx-6 mt-1 hover:border-green-500 hover:border-b-2
  cursor-pointer   ${selectCategory === category ?'border-green-500 border-b-2':''}`}
  onClick={()=>dispatch(updateSelectCategory(category))} >
    {category}
    </li>
  )}

)}

  </ul>
</header>


  )
}

export default ProductHeader;
