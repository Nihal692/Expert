// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(7, 146, 135, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  z-index: 1000;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
  }

  li:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Expert IT HUB</Logo>
      <NavLinks>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
