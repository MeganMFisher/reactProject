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

/*export function Details(props) { 

  const details = getProduct(props.match.params.id)
  return (
    <div>
        <h1>product</h1>*/
    //   {/*<h1>{ details.title }</h1>*/}
    //   {/*<p>{ }</p>*/}
    //   {/*<div>
    //     <img src={player.image} alt='the photographer'/>
    //   </div>*/}
    // {/*</div>
  /*)
}

function Products(props) {
  const productList = getProducts().map((product, i) => (
            <ul key={i} className='product'>
                <Link to={ `detail/${product.id}` }>
                <img src={ product.image } alt='clothing'/>
                </Link>
                <div></div>
                <h3>{ product.title}</h3>
            </ul>
             
       ))

  
  return (
    <div>
      { productList }
    </div>
  )
}*/

    render() {

        const products = this.state.products.map((product, i) => (
            <ul key={i} className='product'>
                <Link to={ `detail/${product.id}` }>
                <img src={ product.image } alt='clothing'/>
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
/*
export default function(props) {
        return(
            <div className='storeSection'>
                <div className='storeProducts'>
                    <Products />
                </div>
            </div>
        )
}*/