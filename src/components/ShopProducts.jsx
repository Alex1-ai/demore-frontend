import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from "axios";
import { BASE_URL } from '../requestMethods';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShopProducts = ({ filters, sort, searchQuery }) => {
  const [products, setProducts] = useState([]);
  // console.log(typeof searchQuery)
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}products`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Apply filters
    if (filters && Object.keys(filters).length > 0) {
      filtered = filtered.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())

      );
    }

    // Apply sorting
    if (sort === "newest") {
      filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === "asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, filters, sort, searchQuery]);

  return (
    <Container>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))
      ) : (
        products.map((item) => (
          <Product key={item.id} item={item} />
        ))
      )}
    </Container>
  );
};

export default ShopProducts;
