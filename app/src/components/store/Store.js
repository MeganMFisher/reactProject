import React, { Component } from 'react';
import { getProducts } from '../../services/products'
import './store.css'

class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
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
                <h3>{ product.title}</h3>
                <img src={ product.image } alt='clothing'/>
            </ul>
        ))

        return(
            <div className='storeSection'>

                { products }

            </div>
        )
    }

}

export default Store