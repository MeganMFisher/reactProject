import React, { Component } from 'react'
import { getProduct } from '../../../services/products';



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
      console.log(this.state.product)
    })

    }
    render() {

        const product = this.state.product;

        return(
             <div>
                <h2>{ product.title }</h2>
                <img src={ product.image } alt='clothing'/>
                <h3>{ product.desc }</h3>
                <h4>${ product.price }</h4>
            </div>
        )
    }

}

export default Detail