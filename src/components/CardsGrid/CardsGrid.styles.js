import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;

export const ReloadButton = styled.button`
  font-family: 'Press Start 2P', sans-serif;
  font-weight: bold;
  margin: 2rem auto;
  display: block; 
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #ef5350;
  color: white;
  transition: background-color 0.3s;

  grid-column: 1 / -1;

  &:hover:not(:disabled) {
    background-color: #d32f2f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;