import styled from "styled-components";

export const Box = styled.div`
  padding: 34px 65px;
  background: black;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
  margin-left: 60px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: orange;
    transition: 270ms ease-in;
  }
`;
export const Heading = styled.p`
  // text-align: center;
  font-size: 1rem;
  color: #fff;
  margin: 40px 0;
  font-weight: bold;
  opacity: 0.6
`;
