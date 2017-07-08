import React, { Component } from 'react';
import { getProducts } from '../../services/products'
import './store.css'

getProducts().then(products => {
  console.log(products)
})

class Store extends Component {

    render() {
        return(
            <div className='storeSection'>
                <h4>Store</h4>
            </div>
        )
    }

}

export default Store