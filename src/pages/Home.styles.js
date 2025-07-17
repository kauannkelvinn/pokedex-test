export function Home() {
    const PageWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      background-image: url("/images/fundo-pokemon-anime.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: 2rem;
    `;
    
    const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      max-width: 1200px;
      width: 100%;
    `;
    
    const NavigationButtons = styled.div`
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    `;
    
    const NavButton = styled.button`
      background-color: #ffcb05;
      color: #3b4cca;
      font-weight: bold;
      padding: 0.7rem 1.5rem;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;
    
      &:hover {
        transform: scale(1.05);
        background-color: #f5b700;
      }
    
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
    
};

