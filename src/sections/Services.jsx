import React from "react";
import styled from "styled-components";
import { FaLaptop, FaDesktop, FaPrint } from "react-icons/fa";

const ServicesContainer = styled.section`
  padding: 5rem 10%;
  background: #0d1117;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #61dafb;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 15px rgba(97, 218, 251, 0.4);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #61dafb;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const ServiceText = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Title>Our Services</Title>
      <Subtitle>We provide top-notch IT solutions and hardware services tailored to your needs.</Subtitle>
      <ServiceGrid>
        <Card>
          <Icon><FaLaptop /></Icon>
          <ServiceTitle>Laptop Services</ServiceTitle>
          <ServiceText>We provide high-quality laptops, repairs, and upgrades for businesses and individuals.</ServiceText>
        </Card>
        <Card>
          <Icon><FaDesktop /></Icon>
          <ServiceTitle>Desktop Solutions</ServiceTitle>
          <ServiceText>Reliable desktop computers, accessories, and IT support for your workspace.</ServiceText>
        </Card>
        <Card>
          <Icon><FaPrint /></Icon>
          <ServiceTitle>Printer Services</ServiceTitle>
          <ServiceText>Printer sales, maintenance, and refilling services at competitive prices.</ServiceText>
        </Card>
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default Services;
