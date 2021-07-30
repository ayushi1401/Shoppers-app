import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import  ButtonContainer  from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, category, image, description, price, title, inCart } = value.detailProduct;
          console.log({category});
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-primary my-5">
                  <h1>
                    {title}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-8 mx-auto col-md-4 my-3 ">
                  <img src={image} alt="product" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <h2>
                    Model: {title}
                  </h2>
                  <h4 className="text-uppercase ">
                    Catergory:  
                    <span className="test-uppercase">{category}</span>
                  </h4>
                  <h4 className="text-primary">
                    <strong> Price: <span>$</span> {price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description
                  </p>
                  <p className="text-muted lead">{description}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={!!inCart}
                      onClick={ ()=> {
                        value.addProduct(id)
                      }}
                    >
                      {inCart ? 
                        "in Cart" : "add to Cart"
                      }
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
