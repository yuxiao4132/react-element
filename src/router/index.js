import React, { lazy } from 'react'
import { Redirect } from "react-router-dom";
const City = lazy(() => import('../pages/City'))
const Position = lazy(() => import('../pages/Position'))
const Home = lazy(() => import('../pages/Home'))
const SearchGeo = lazy(() => import('../pages/SearchGeo'))
const Login = lazy(() => import('../pages/Login'))
const Theme = lazy(() => import('../pages/Theme'))
const Order = lazy(() => import('../pages/Order'))
const My = lazy(() => import('../pages/My'))
const Shop = lazy(() => import('../pages/Shop'))
const routes = [
    {
      path: "/",
      exact: true,
      render: () => (
        <Redirect to="/city"/>
      )
    },
    {
      path: "/element",
      component: Theme,
      routes: [
        {
          path: "/element/home/:id",
          component: Home
        },
        {
          path: "/element/search/:id",
          component: SearchGeo
        },
        {
          path: "/element/order",
          component: Order
        },
        {
          path: "/element/my",
          component: My
        },
      ]
    },
    {
      path: "/city",
      component: City
    },
    {
        path: "/position/:id",
        component: Position
    },
    {
      path: "/shop/:geohash/:id",
      component: Shop
    },
    {
      path: "/login",
      component: Login
    },
  ];
  
  export default routes;