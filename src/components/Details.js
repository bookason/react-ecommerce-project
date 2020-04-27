import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) =>{
                        const {id,company,img,info,title,price,inCart} = value.detailProduct;
                        return(
                            <div className="container py-5">

                                {/* Title */}

                                <div className="row">
                                    <div className="col-10 mx-auto text-slanted text-blue text-center my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>

                                {/* End of title */}

                                {/* Product info */}
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                            <img src={img} className ="w-100" alt=""/>
                                        </div>

                                        <div className="text-capitalize col-10 mx-auto col-md-6 my-3">
                                            <h2> model: {title} </h2>
                                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> made by: <span className="text-uppercase">{company}</span></h4>
                                            <h4 className="text-blue">
                                                <strong> price: <span>
                                                    
                                                    $
                                                    </span> {price}</strong>
                                            </h4>
                                            <p className="text-capitalize mb-0 font-weight-bold mt-3">
                                                product info
                                            </p>
                                            <p className="lead text-muted">{info}</p>

                                            {/* buttons */}

                                            <div>
                                                <Link to ="/" className="mr-3">
                                                   <ButtonContainer>
                                                       back to products
                                                   </ButtonContainer>

                                                </Link>

                                                <ButtonContainer 
                                                cart
                                                disabled ={inCart? true: false}
                                                onClick ={()=>{
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                    {inCart ? "In Cart" : "Add to Cart"}
                                                </ButtonContainer>
                                            </div>
                                        </div>
                                    </div>
                                {/* End of info */}

                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
