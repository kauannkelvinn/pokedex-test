import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ $isDetail }) => ($isDetail ? "#f0f0f0" : "white")};
  border: ${({ $isDetail }) => ($isDetail ? "3px solid #2a75bb" : "1px solid #ccc")};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ $isDetail }) =>
    $isDetail ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "none"};
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;

  img {
    width: ${({ $isDetail }) => ($isDetail ? "200px" : "120px")};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: ${({ $isDetail }) => ($isDetail ? "2rem" : "1.2rem")};
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    margin: 0.4rem 0;
    text-transform: capitalize;
  }

  strong {
    color: #2a75bb;
  }

    @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem;

    img {
      width: 140px;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;


export const StatsContainer = styled.div`
  margin-top: 1.5rem;
  text-align: left;

  h4 {
    color: #2a75bb;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 0.3rem;
      font-size: 1rem;
      text-transform: capitalize;
    }
  }
`;
