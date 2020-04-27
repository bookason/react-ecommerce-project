import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                <img src={logo} alt="" className=" navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to = "/" className ="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>

                <Link to ="/cart" className="btn ml-auto">
                    <ButtonContainer>
                        <i className="mr-2 fas fa-cart-plus"/> My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
}
`


