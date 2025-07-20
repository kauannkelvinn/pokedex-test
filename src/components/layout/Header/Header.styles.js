import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #ffcb05;
  color: #2a75bb;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  img {
    cursor: pointer;
    height: 110px;
    width: auto;
    display: block;

    @media (max-width: 768px) {
      height: 90px;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #2a75bb;
    font-weight: bold;
    font-size: 0.9rem;

    &:hover {
      transform: translateY(-1px);
      transition: transform 0.2s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: #2a75bb;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  &.aberto {
  align-items: end;
    display: flex;
    flex-direction: column;
    background-color: #ffcb05;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    max-width: 100vw;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 1000;

    a {
      text-decoration: none;
      color: #2a75bb;
      font-weight: bold;
      font-size: 0.8rem;

      &:hover {
        color: #ff5959;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;