import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #0b0f15;
  color: white;
  padding: 3rem 10%;
  text-align: center;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  text-align: left;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.8;
  }

  li:hover {
    color: #61dafb;
    opacity: 1;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 1.5rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: 0.3s;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  opacity: 0.6;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <Title>About Expert IT HUB</Title>
          <p>Your one-stop IT solution for desktops, laptops, and printers.</p>
        </FooterColumn>
        <FooterColumn>
          <Title>Quick Links</Title>
          <List>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          </List>
        </FooterColumn>
        <FooterColumn>
          <Title>Follow Us</Title>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>
      <Copyright>© 2025 Expert IT HUB. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
