import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface MenuLateralProps {
  $isOpen: boolean;
}

export const HomeLayoutContainer = styled.div`
  display: flex;
`;

export const MenuLateral = styled.aside<MenuLateralProps>`
  position: relative;
  transition: all 0.1s ease-in-out;
  z-index: 999;
  min-width: ${(props) => (props.$isOpen ? "250px" : "60px")};
  height: 100vh;
  background: ${(props) => props.theme.buchim_base_dark};

  header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const ButtonLogoFull = styled.button`
  animation: ${fadeIn} 0.5s ease-in-out;
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const ButtonLogoSmall = styled.button`
  animation: ${fadeIn} 0.5s ease-in-out;
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const NavOpen = styled.nav`
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      a {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;
        color: ${(props) => props.theme.buchim_base_light};
        svg {
          color: ${(props) => props.theme.buchim_base_light};
        }
        &.activeLink {
          color: ${(props) => props.theme.primary};
          svg {
            color: ${(props) => props.theme.primary};
          }
        }
      }
    }
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const NavClosed = styled.nav`
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      a {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;
        color: ${(props) => props.theme.buchim_base_light};
        svg {
          color: ${(props) => props.theme.buchim_base_light};
        }
        &.activeLink {
          color: ${(props) => props.theme.primary};
          svg {
            color: ${(props) => props.theme.primary};
          }
        }
      }
    }
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const NavFooter = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  img {
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: ${(props) => props.theme.buchim_base_light};
  @media (max-width: 1150px) {
    margin-top: 40px;
    height: calc(100vh - (40px + 60px));
    padding: 0 1rem;
  }
`;

export const HeaderMenuMobile = styled.div`
  display: none;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: start;
  padding: 0 1rem;
  background: ${(props) => props.theme.buchim_base_dark};
  img {
    width: 80px;
  }

  img.profile {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 1150px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterMenuMobile = styled.div`
  display: none;
  position: fixed;
  z-index: 999;
  align-items: center;
  justify-content: start;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  background: ${(props) => props.theme.buchim_base_dark};

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      a {
        svg {
          color: ${(props) => props.theme.buchim_base_light};
        }
        &.activeLink {
          svg {
            color: ${(props) => props.theme.primary};
          }
        }
      }
    }
  }

  @media (max-width: 1150px) {
    display: flex;
  }
`;
