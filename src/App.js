import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { BrowserRouter as Router ,
  Routes, Route,
  // Link,
  // useParams,
  useNavigate,

  Navigate
} from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Orders from "./pages/Orders";


function App() {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={ <Home /> }/>
        <Route  path="/shops" element={ <Shop /> }/>
        <Route  path="/products" element={<ProductList />}/>
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route  path="/product/:id" element={<Product />}/>
        <Route  path="/cart" element={user? <Cart /> :  <Login />}/>
        <Route  path="/login" element={user? <Navigate to="/"/> :  <Login />}/>
        <Route  path="/register" element={user? <Navigate to="/"/> : <Register />}/>
        <Route  path="/success" element={user? <Success /> : <Login /> }/>
        <Route path="/dashboard" element={user ? <Orders /> : <Navigate to="/login" />} />



      </Routes>
    </Router>
    // <div >

    //  <Home />
    //  {/* <ProductList /> */}
    //  {/* <Product /> */}
    //  {/* <Register /> */}
    //  {/* <Login /> */}
    //  {/* <Cart /> */}
    // </div>
  );
}

export default App;
