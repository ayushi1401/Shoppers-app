import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import ButtonContainer from './Button';
import Select from 'react-select';
import { ProductConsumer } from '../context';



export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk 
        */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <ProductConsumer>
          {(value) => {
            const { category } = value.detailProduct;
            console.log({category});
            return (
              <div className="ml-auto">
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-12">
                    <Select options={ category } />
                  </div>
                  <div className="col-md-12"></div>
                </div>
              </div>
            )
          }}
          
        </ProductConsumer>

        
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            My Cart
          </ButtonContainer>
        </Link>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
