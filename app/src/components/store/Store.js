import React, { Component } from 'react';
import { getProducts } from '../../services/products';
import { Link } from 'react-router-dom';

import './store.css'

class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productDetails: []
        }
    }


componentDidMount() {
    getProducts().then(products => {
      this.setState({
        products: products
      })
      console.log(this.state.products)
    })
}

    render() {

        const products = this.state.products.map((product, i) => (
            <ul key={i} className='product'>
                <Link to={ `detail/${product.id}`} name={product.title}>
                <img src={ product.image } alt='clothing'/>
                </Link>
                <div></div>
                <h3>{ product.title }</h3>
            </ul>
        ))

        return(
            <div className='storeSection'>
            <div className='storeProducts'>
                { products }
             </div>
             </div>
         )
     }

}

export default Store
