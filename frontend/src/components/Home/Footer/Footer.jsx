import React from "react";
import "./Footer.modules.css";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";
import {
  Box,
  Container,
  Row,
  Column, 
  Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";


const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Box>
      <Container>
        <Row>
        <Column>
            <Heading> Falma</Heading>
            <Link className="link" to="/shipping">Shipping + Returns</Link>
            <Link className="link" to="/vision">Vision</Link>
            <Link className="link"  to="/refund">Refund Policy</Link>
            <Link className="link"  to="/terms">Terms and Services</Link>
            <Link className="link" to="/privacy">Privacy Policy</Link>
          </Column>
          <Column>
            <Heading>About us</Heading>
            <Link className="link"  to="/mission">Our Mission</Link>
           
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Link  className="link" to="/"onClick={() => openInNewTab('https://github.com/FreemanJE')} >Freeman Johnson </Link>
            <Link  className="link" to="/"onClick={() => openInNewTab('https://github.com/abdsimon')}>Abdulwahed Diab</Link>
            <Link  className="link" to="/"onClick={() => openInNewTab('https://github.com/MartinsOni')}>Martins Oni</Link>
            <Link  className="link" to="/"onClick={() => openInNewTab('https://github.com/Lindaroy202')}>Linda Awasiri </Link>
          </Column>
          <Column>
            <Heading>Social Media</Heading>

               <Link className="link" to="/" onClick={() => openInNewTab('https://github.com/falma-ecommerce/falma-ecommerce/tree/main')}>
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </Link>
            <Link className="link"  to="/"onClick={() => openInNewTab('https://www.facebook.com/')} >
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </Link>
            <Link className="link"  to="/"onClick={() => openInNewTab('https://www.instagram.com/?hl=en')} >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </Link>
            <Link className="link" to="/"onClick={() => openInNewTab('https://twitter.com/?lang=en')} >
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </Link>
          </Column>
        </Row>
        <div className="icons">
          <div className="paypal" style={{color:"blue"}}>
            <FaCcPaypal />
          </div>          
          <div className="visa"style={{color:"red"}} >
            <FaCcVisa />
          </div>          
          <div className="visa"style={{color:"white "}} >
            <FaCcApplePay />
          </div>
          <div className="visa"style={{color:"blue"}} >
            <FaCcAmex />
          </div>
        </div>
        <Heading className="text-center">
          <p style={{ color: "	rgb(255,255,255)"  }}>
           &copy;{new Date().getFullYear()}  @Falma | Only for Educational Purposes
          </p>
          
        </Heading>
      </Container>
    </Box>
  );
};
export default Footer;