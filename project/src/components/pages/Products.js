import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Product } from '../elements/ProductPreview'
import { Controls } from '../elements/Controls'
import { ButtonsToBuy } from '../elements/ButtonsToBuy'
import { NavLink} from 'react-router-dom';
import { Pagination } from '../elements/Pagination'


export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const[category, setCategory] = useState('all')
  const [isChecked, setIsChecked] = useState(false);
  const productsCollectionRef = collection(db, "listOfProducts")
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage  = 5;

useEffect(() => {
    const getProducts = async () => {
      try{
    const data = await getDocs(productsCollectionRef);
     console.log(data)
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    console.log('список товаров получен')
  }
    catch(e) {
alert('что-то пошло не так, попробуйте позже', e)
    }
    }
    getProducts()
    }, [])

useEffect(() => {
  if(category === 'all') {
    if(isChecked === true){ 
      let arr = products.slice()
      arr.sort((a, b) => a.price - b.price)
      setFilteredProducts(arr)
    }
    else{setFilteredProducts(products)}
  } 
  else{
    let arr = products.filter(product => product.category === category);
    if(isChecked) {arr.sort((a, b) => a.price - b.price)}
    setFilteredProducts(arr)
}
}, [category, products, isChecked])

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

const cbSelectCategory = (value) => {
  setCategory(value)
}

const cbIsChecked = (value) => {
  setIsChecked(value)
}

  return (
    <>
    <Controls selectValue={cbSelectCategory} isChecked={cbIsChecked} checked={isChecked}/>
    <div className='list-of-products'>
      {currentProducts.map((product) => {
      return (
        <NavLink to={`${product.id}`} state={{product}} className={'navlink'} key={product.id+'navlink'}>
        <div 
        style={{display: 'flex', 
        flexDirection: 'column', 
        border: '1px solid rgba(80, 80, 80, 0.1)', 
        margin: '10px'}}>
          <Product product={product} key={product.id+'product'+1}/>
           <ButtonsToBuy cardData={product} key={product.id+'buttonsFromPreview'} id={product.id}/>
        </div>
        </NavLink>
      )})}
    </div>
    <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate}/>
    </>
  )
}
