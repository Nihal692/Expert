// src/sections/Products.jsx
import React from "react";
import styled from "styled-components";

const products = [
  { id: 1, name: "Laptops", image: "https://s.yimg.com/uu/api/res/1.2/VAIXo0bjHGYVFAAaHAb8xw--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2024-10/64081ea0-9d46-11ef-bfff-7ba57dd7df36", description: "High-performance laptops." },
  { id: 2, name: "Desktops", image: "https://static.digit.in/default/dell-cover-87c7394e42.jpeg", description: "Powerful desktops." },
  { id: 3, name: "Printers", image: "https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", description: "Reliable printers." },
];

const ProductsContainer = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 15px rgba(97, 218, 251, 0.4);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Products = () => {
  return (
    <ProductsContainer id="products">
      <h2>Our Products</h2>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </Grid>
    </ProductsContainer>
  );
};

export default Products;
