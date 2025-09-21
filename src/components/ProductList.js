import React from 'react'
import useFetch from '../hooks/useFetch'
import './ProductList.css'

function ProductList() {
  let {data, isLoading, err} = useFetch('https://api.escuelajs.co/api/v1/products')

  if(isLoading) return <div className="loading">Loading...</div>
  if(err) return <div className="error">Oops! {err}</div>
  
  return (
    <div className='product-container'>
      <div className='product-list'>
        {data?.map(item => (
          <div key={item.id} className='product-card'>
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList