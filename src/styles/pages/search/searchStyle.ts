import { fontSizes, fontWeights, radii } from "@buchim/tokens";
import { keyframes, styled } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SearchContainer = styled.section`
  width: 100%;
  overflow-y: clip;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;

  header {
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    z-index: 10;

    input {
      width: 100%;
      height: 3rem;
      border-bottom: 1px solid ${(props) => props.theme.gray_500};
      outline: none;
      background: transparent;
      caret-color: ${(props) => props.theme.primary};
      padding: 0 1rem;
      font-size: ${fontSizes.sm};
      color: ${(props) => props.theme.gray_900};
      &::placeholder {
        color: ${(props) => props.theme.gray_500};
      }
    }

    span {
      padding-left: 1rem;
      font-size: ${fontSizes.xs};
      color: ${(props) => props.theme.primary};
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .filters {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 0 1rem;
      gap: 0.5rem;

      .pills {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;
        border-radius: ${radii.full};
        padding: 0.1rem 0.5rem;
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};
        p {
          font-size: ${fontSizes.xs};
          font-weight: 500;
          color: ${(props) => props.theme.white};
        }
      }
    }
  }
`;

export const Pills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  border-radius: ${radii.full};
  padding: 0.1rem 0.5rem;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  p {
    font-size: ${fontSizes.xs};
    font-weight: 500;
    color: ${(props) => props.theme.white};
  }
`;

export const ResultSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  padding: 0 1rem;
  padding-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const CardRestaurant = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  position: relative;
  min-width: 280px;
  height: 280px;
  border-radius: ${radii.md};
  overflow: clip;
  outline: none;

  img.food {
    width: 100%;
    height: 100%;
    border-radius: ${radii.md};
    object-fit: cover;
    transition: all 0.2s;
  }
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0 0.5rem;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    .left {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      img {
        width: 24px;
        height: 24px;
        border-radius: ${radii.full};
        object-fit: cover;
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        h5,
        h6 {
          font-weight: ${fontWeights.bold};
        }
        h5 {
          font-size: ${fontSizes.xs};
          color: ${(props) => props.theme.buchim_base_light};
        }
        h6 {
          font-size: ${fontSizes.xxs};
          color: ${(props) => props.theme.secondary_ghost_text};
        }
      }
    }
    button.follow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.1rem;
      border-radius: ${radii.full};
      padding: 0.1rem 0.5rem;
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      p {
        font-size: ${fontSizes.xs};
        font-weight: 500;
        color: ${(props) => props.theme.white};
      }
    }
  }

  &:hover {
    img.food {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
  }
`;

export const DropdownRoot = styled(DropdownMenu.Root)``;
export const DropdownTrigger = styled(DropdownMenu.Trigger)``;
export const DropdownContent = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme.secondary_ghost};
  border-radius: ${radii.md};
  overflow: clip;
  box-shadow: 0 0 0 1px ${(props) => props.theme.gray_500};
  margin-top: 0.2rem;
`;
export const DropdownButton = styled(DropdownMenu.Item)`
  width: 150px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${(props) => props.theme.gray_900};
  font-size: ${fontSizes.sm};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gray_500};
  }
`;
