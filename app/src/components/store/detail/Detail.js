import React, { Component } from 'react'
import { getProduct } from '../../../services/products';
import './detail.css';



class Detail extends Component {
    constructor() {
        super()

        this.state = {
            product: ''
        }
    }

    componentDidMount() {
    getProduct(this.props.match.params.id).then(product => {
      this.setState({
        product: product
      })
    })

    }
    render() {

        const product = this.state.product;

        return(
             <div className="detailSection">
                <h2>{ product.title }</h2>
                <img src={ product.image } alt='clothing'/>
                <h3>{ product.desc }</h3>
                <h4>${ product.price }.00</h4>
            </div>
        )
    }

}

export default Detail