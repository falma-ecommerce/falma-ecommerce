import React from "react";
import "./Footer.css";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcApplePay,
  FaCcAmex,
} from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
        <Column>
            <Heading> Falma</Heading>
            <FooterLink to="/">Shipping + Returns</FooterLink>
            <FooterLink to="/">Vision</FooterLink>
            <FooterLink to="/">Refund Policy</FooterLink>
            <FooterLink to="/">Terms and Services</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>About us</Heading>
            <FooterLink to="/">Our Mission</FooterLink>
            <FooterLink to="/"></FooterLink>
            {/* <FooterLink to="/">Next day Delivery</FooterLink> */}
           {/*  <FooterLink to="/">Teaching</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink to="/">Freeman</FooterLink>
            <FooterLink to="/">Abdul</FooterLink>
            <FooterLink to="/">Martins</FooterLink>
            <FooterLink to="/">Linda</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink to="/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink to="/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink to="/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink to="/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <div className="icons">
          <div className="paypal">
            <FaCcPaypal />
          </div>          
          <div className="visa">
            <FaCcVisa />
          </div>          
          <div className="visa">
            <FaCcApplePay />
          </div>
          <div className="visa">
            <FaCcAmex />
          </div>
        </div>
        <Heading className="text-center">
          <p style={{ color: "#DAA03DFF "}}>
           &copy;{new Date().getFullYear()}  @Falma | Only for Educational Purposes
          </p>
          
        </Heading>
      </Container>
    </Box>
  );
};
export default Footer;
