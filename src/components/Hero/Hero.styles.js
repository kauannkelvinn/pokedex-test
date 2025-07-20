import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2a75bb, #3b4cca);
  color: #fff;
  padding: 6rem 2rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.a`
  display: inline-block;
  background: #ffcb05;
  color: #2a75bb;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #f5b800;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem 1.2rem;
  }
`;
