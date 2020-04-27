import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
    // state = {
    //     products: storeProducts,

    // }
    render() {
        return (
            <React.Fragment>
            <div>
                <div className="container py-5">
                        <Title name ="our" title ="products" />
                    <div className="row">

                       <ProductConsumer>
                            {value =>{
                            //    console.log(value)
                            return value.products.map(
                                product =>{
                                    return <Product key ={product.id} product = {product}/>
                                }
                            )
                            }}
                       </ProductConsumer>

                    </div>

                </div>
            </div>
            </React.Fragment>
        )
    }
}