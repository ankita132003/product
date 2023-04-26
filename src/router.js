import {
    createBrowserRouter,
  } from "react-router-dom";
import SingleScreen from './Components/SingleScreen'
import App from './App'
import SingleProduct from "./Components/SingleProduct";
import LogIn from "./screens/LogIn";
export const router = createBrowserRouter([
    {
      path : '/',
      element : <App/>
    },
    {
      path : `/products/:id`,
      element : <SingleProduct/>
    },
    {
      path : '/login',
      element : <LogIn/>
    }
  ]);