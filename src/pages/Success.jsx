import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { myToken, userRequest } from "../requestMethods";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { removeAllProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import Newsletter from "../components/Newsletter";

const Success = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state?.stripeData;
  const cart = location?.state?.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
            img: item.img,
            title: item.title
          })),
          amount: cart?.total,
          address: data?.billing_details.address,
        });
        setOrderId(res.data._id);
        dispatch(removeAllProduct());
      } catch (e) {
        console.log("Error occurred in the order" + e)
      }
    };
    data && createOrder();
  }, [cart, data, dispatch, currentUser]);

  return (
    <>
      <Navbar />
      <Announcement />
      <Box
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        {orderId ? (
          <CheckCircleIcon
            style={{
              fontSize: "100px",
              color: "white",
              backgroundColor: "teal",
              borderRadius: "50%",
              padding: "20px",
              marginBottom: "20px",
            }}
          />
        ) : (
          <CircularProgress
            style={{
              color: "teal",
              marginBottom: "20px",
            }}
            size={100}
            thickness={4.5}
          />
        )}
        <h2>{orderId ? "Order Successful!" : "Processing your order..."}</h2>
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Success! Your order is being prepared...`}
        <Link to="/" style={{ textDecoration:'none', border:'none', color:'white', backgroundColor:'teal', padding: 10, marginTop: 20 }}>Continue Shopping</Link>
      </Box>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Success;
