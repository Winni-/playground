import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './index/index'
import Product from './product'
import Admin from './admin'
import { User } from './user'

const Wrapper = ({children}) => children;

export const Router = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route path="/" exact component={ Index }/>
        <Route path="/product/:id" component={ Product }/>
        <Route path="/admin" component={ Admin }/>
        <Route path="/user" component={ User }/>
      </Wrapper>
    </BrowserRouter>
  );
};
