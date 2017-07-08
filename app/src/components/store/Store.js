import React, { Component } from 'react';
import { getProducts } from '../../services/products';
import { Link } from 'react-router-dom';
// import Detail from './detail/Detail';

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
                <Link to={ `detail/${product.id}` }>
                <img src={ product.image } alt='clothing'/>
                </Link>
            </ul>
        ))

        return(
            <div className='storeSection'>
                { products }
                {/*<Detail />*/}
            </div>
        )
    }

}

export default Store