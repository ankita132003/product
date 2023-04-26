import React from 'react'
import {  useParams } from 'react-router-dom';
function SingleProduct() {
    let { id } = useParams();
    
  return (
    <div>
        single Product
        {id}
    </div>
  )
}

export default SingleProduct
