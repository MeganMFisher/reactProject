import React, { Component } from 'react';
import { getProducts, getProduct } from '../../services/products';
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

getProductDetails(e) {
    getProduct(e).then(res => {
      this.setState({
          productDetails: e.target.value
      }) 
      console.log(this.state.productDetails)
    })
}

    render() {

        const products = this.state.products.map((product, i) => (
            <ul key={i} className='product'>
                <Link to={ `detail/${product.id}` }>
                <img src={ product.image } alt='clothing' value={ product.id } onClick={ this.getProductDetails }/>
                </Link>
                <div></div>
                <h3>{ product.title}</h3>
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
