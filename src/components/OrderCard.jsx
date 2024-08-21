import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const OrderContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background-color: #f9f9f9;
`;

const OrderTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ProductQuantity = styled.span`
  font-size: 14px;
  color: #555;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const OrderAmount = styled.h3`
  font-size: 20px;
  margin-top: 20px;
`;

const OrderStatus = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background-color: ${props => props.status === 'pending' ? 'orange' : 'teal'};
  color: white;
  border-radius: 5px;
  font-size: 14px;
`;

const OrderDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

const OrderCard = ({ order }) => {
    const formattedDate = format(new Date(order.createdAt), 'MMMM dd, yyyy');

  return (
    <OrderContainer>
      <OrderTitle>Order ID: {order._id}</OrderTitle>
      <ProductList>
        {order.products.map((product, index) =>{
            console.log(product.img)

        return (
          <ProductItem key={index}>
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
            </ProductDetails>
            <ProductImage src={product.img} alt={product.title} />
          </ProductItem>
        )})}
      </ProductList>
      <OrderAmount>Total: ${order.amount}</OrderAmount>
      <OrderStatus status={order.status}>{order.status}</OrderStatus>
      <OrderDate>Ordered on: {formattedDate}</OrderDate>
    </OrderContainer>
  );
};

export default OrderCard;
