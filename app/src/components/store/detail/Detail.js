import React from 'react'
import { getProduct } from '../../../services/products';


export default function Detail (props) {
   const productId = props.match.params.id

   getProduct(productId).then(res => {
       return res 
   })


  return (
    <div>
        { productId }
    </div>
  )
}

