import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrderCard from '../components/OrderCard';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { userRequest } from '../requestMethods';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";
import Newsletter from '../components/Newsletter';

const OrdersContainer = styled.div`
  padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 60vh;
`;

const OrdersTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
const OrderProgressor = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;


const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  color: #555;
  margin: 20px 0;
`;

const Orders = () => {

  const currentUser = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await userRequest.get(`orders/find/${currentUser._id}`);
        // Sort orders by createdAt in descending order
        const sortedOrders = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setOrders(sortedOrders);
      } catch (e) {
        console.log('Error fetching orders: ', e);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchOrders();
  }, [currentUser?._id]);

  return (
    <>
      <Navbar />
      <Announcement />
      <OrdersContainer>
        <OrdersTitle>Your Orders</OrdersTitle>
        {loading ? (
            <OrderProgressor>
          <CircularProgress />
          </OrderProgressor>
        ) : orders.length === 0 ? (
          <>
            <EmptyMessage>No orders found</EmptyMessage>
            <Link to="/" style={{ textDecoration:'none',
                 border:'none', color:'white', backgroundColor:'teal',
                  padding: 10, marginTop: 20 }}>Start Shopping</Link>
            {/* <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: 'teal' }}
              onClick={() => window.location.href = '/'}
            >
              Start Shopping
            </Button> */}
          </>
        ) : (
          orders.map(order => (
            <OrderCard key={order._id} order={order} />
          ))
        )}
      </OrdersContainer>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Orders;
