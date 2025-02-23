// src/sections/Hero.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://t3.ftcdn.net/jpg/07/52/70/74/360_F_752707422_6wyWHXR0SRmVyvmR2NCObNTW7RbCmSKq.jpg") no-repeat center center/cover;
  padding: 5rem 2rem;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 1rem;
  max-width: 600px;
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Expert IT HUB
      </Title>
      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Your one-stop solution for IT products and services.
      </Subtitle>
    </HeroContainer>
  );
};

export default Hero;
