import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import ShopProducts from '../components/ShopProducts';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 15px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const Shop = () => {
  const location = useLocation();
  console.log(location.state?.search)
  const searchQuery = location.state?.search;
  // const searchQuery = searchParams.get("search") || "";
  console.log("This is the search engine ",searchQuery)

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // useEffect(() => {
  //   // Handle search filtering here using searchQuery
  //   console.log("Search Query:", searchQuery);
  // }, [searchQuery]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>All Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
            <Option>gold</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ShopProducts filters={filters} sort={sort} searchQuery={searchQuery} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Shop;
