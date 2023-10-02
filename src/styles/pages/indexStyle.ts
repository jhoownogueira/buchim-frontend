import { fontSizes, fontWeights, radii, sizes } from "@buchim/tokens";
import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: clip;
    .images-container {
      width: 100%;
      height: 95%;
      overflow: clip;
      display: flex;
      border-radius: 32px;
      gap: 0.5rem;
      background: ${(props) => props.theme.black};
      .column-image {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        img {
          min-width: 284px;
          min-height: 284px;
          border-radius: 12px;
          object-fit: cover;
        }

        &:nth-child(1) {
          margin-top: -10rem;
        }
        &:nth-child(2) {
          margin-top: -1rem;
        }
        &:nth-child(3) {
          margin-top: -7rem;
        }
        &:nth-child(4) {
          margin-top: -3rem;
        }
      }
    }
  }

  .right {
    min-width: 600px;
    height: 100%;
    padding: 2rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
      width: 100%;
      height: 2.625rem;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.5rem;

      span {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.medium};
        color: ${(props) => props.theme.gray_700};
      }

      button {
        padding: ${sizes[3]};
        border-radius: ${radii.md};
        background: ${(props) => props.theme.primary_ghost};
        color: ${(props) => props.theme.primary_ghost_text};
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.medium};

        &:hover {
          transition: all 0.2s;
          background: ${(props) => props.theme.primary_ghost_text};
          color: ${(props) => props.theme.primary_ghost};
        }
      }
    }

    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      img {
        width: 165px;
      }
      span {
        width: 100%;
        max-width: 318px;
        text-align: center;
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.medium};
        color: ${(props) => props.theme.gray_900};
      }

      fieldset {
        width: 100%;
        input {
          width: 100%;
          height: 3rem;
          border-radius: ${radii.lg};
          border: 1px solid ${(props) => props.theme.gray_500};
          outline: none;
          color: ${(props) => props.theme.gray_900};
          caret-color: ${(props) => props.theme.primary};
          padding: 0 1rem;

          &::placeholder {
            color: ${(props) => props.theme.gray_700};
          }

          &:focus {
            border-color: ${(props) => props.theme.primary};
          }
        }
      }

      button.forget-password {
        color: ${(props) => props.theme.primary};
        font-size: ${fontSizes.sm};
        &:hover {
          transition: all 0.2s;
          color: ${(props) => props.theme.primary_hover};
          text-decoration: underline;
        }
      }

      button.login {
        width: 100%;
        height: 3rem;
        border-radius: ${radii.lg};
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};

        &:hover {
          transition: all 0.2s;
          background: ${(props) => props.theme.primary_hover};
        }
      }
    }
  }

  @media (max-width: 480px) {
    .left {
      display: none;
    }
    .right {
      min-width: 100%;
      padding: 2rem;
    }
  }
`;
