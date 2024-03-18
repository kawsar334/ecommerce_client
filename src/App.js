import logo from './logo.svg';
import './App.css';
import ProductList from './features/productlist/ProductLists';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, BrowserRouter, RouterProvider } from "react-router-dom"
import CartPage from './pages/cart/CartPage';
import Checkout from './pages/checkout/Checkout';
import Details from './pages/details/Details';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import Contac from './pages/Contact/Contac';
import Search from './pages/search/Search';
import Success from './pages/success/Success';


const Auth = localStorage.getItem("auth");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: !Auth ? <Login /> : <Home />,

  },
  {
    path: "/register",
    element: !Auth ? <Register /> : <Home />,

  },
  {
    path: "/cart",
    element:!Auth ? <Login/>:<CartPage />,

  },
  {
    path: "/checkout",
    element: <Checkout />,

  },
  {
    path: "/details/:id",
    element: <Details />,

  },
  {
    path: "/products",
    element: <Products />,

  },
  {
    path: "/cat/:id",
    element: <Categories />,

  },
  {
    path: "/contact",
    element: <Contac />,

  },
  {
    path: "/searchroute",
    element: <Search />,

  },
  {
    path: "/success",
    element: <Success />,

  },

]);
function App() {
  return (
    <div style={{ background: "white" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
