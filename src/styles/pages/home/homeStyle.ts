import { fontSizes, fontWeights, radii } from "@buchim/tokens";
import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  overflow-y: clip;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

export const PostsContainer = styled.main`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  div.encontrar-restaurant {
    width: 100%;
    max-width: 468px;
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed ${(props) => props.theme.gray_500};
    border-radius: 12px;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.gray_700};
    }
  }
  @media (max-width: 768px) {
    div.encontrar-restaurant {
      height: calc(100vh - 9rem);
    }
  }
`;

export const Posts = styled.div`
  width: 100%;
  max-width: 468px;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.buchim_base_light};
        outline: 1px solid ${(props) => props.theme.primary};
      }
      strong {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.bold};
        color: ${(props) => props.theme.primary};
      }
      span {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.bold};
        color: ${(props) => props.theme.gray_700};
      }
    }
    .right {
      button {
        svg {
          color: ${(props) => props.theme.gray_900};
        }
      }
    }
  }
  img {
    object-fit: cover;
    border-radius: ${radii.md};
  }

  img.post-img {
    min-height: 498.31px;
  }
  .buttons {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    button {
      svg {
        color: ${(props) => props.theme.primary};
      }
    }
    .left {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
    }
  }
  footer {
    width: 100%;
    p {
      font-size: ${fontSizes.sm};
      font-weight: ${fontWeights.regular};
      color: ${(props) => props.theme.gray_900};
    }
  }
`;

export const SugestionsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 1rem;
  padding-right: 4rem;
  justify-self: flex-end;
  .row {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.buchim_base_light};
        outline: 1px solid ${(props) => props.theme.primary};
      }
      strong {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.bold};
        color: ${(props) => props.theme.primary};
      }
      span {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.bold};
        color: ${(props) => props.theme.gray_700};
      }
    }
    .right {
      button {
        svg {
          color: ${(props) => props.theme.gray_900};
        }
      }
    }
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;
