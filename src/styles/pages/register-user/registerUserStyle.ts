import { fontSizes, fontWeights, radii, space } from "@buchim/tokens";
import styled from "styled-components";

export const RegisterUserContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.buchim_black};

  .left {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 128px;
    align-items: center;
    background: url("/register-images/blur_black.png") no-repeat center center;
    background-size: cover;

    .small-logo {
      position: absolute;
      left: 1rem;
      top: 1rem;
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${space[5]};
      text-align: center;

      h2 {
        font-size: ${fontSizes["4xl"]};
        font-weight: ${fontWeights.bold};
        color: ${(props) => props.theme.white};
      }

      p {
        width: 100%;
        max-width: 35rem;
        font-size: ${fontSizes.md};
        font-weight: ${fontWeights.regular};
        color: ${(props) => props.theme.gray_500};
      }

      .cards {
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        .card {
          width: 9.375rem;
          height: 9.375rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: ${space[2]};
          border-radius: ${radii.lg};
          background: ${(props) => props.theme.black};
          svg {
            color: ${(props) => props.theme.primary};
          }
          span {
            font-size: ${fontSizes.sm};
            color: ${(props) => props.theme.white};
          }
        }
      }
    }
  }

  .right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 128px 32px 0;
    gap: ${space[5]};
    background-color: ${(props) => props.theme.white};

    h1 {
      font-size: ${fontSizes["4xl"]};
      font-weight: ${fontWeights.bold};
      color: ${(props) => props.theme.black};
    }

    .root-tabs {
      width: 100%;
      max-width: 35rem;

      .container-tabs {
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: ${space[4]};
        margin-bottom: 0.5rem;

        .tab-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${space[2]};
          padding: ${space[2]} ${space[4]};
          border-radius: ${radii.md};
          font-size: 0.875rem;

          &[aria-selected="false"] {
            color: ${(props) => props.theme.primary_ghost_text};
            border: 1px solid ${(props) => props.theme.primary_ghost_text};
            background: transparent;
            transition: all 0.2s;
          }

          &[aria-selected="true"] {
            color: ${(props) => props.theme.white};
            border: 1px solid transparent;
            background: ${(props) => props.theme.primary};
          }
        }
      }
    }

    article {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${space[2]};
      margin-top: ${space[4]};

      .input-with-photo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${space[5]};

        .img-profile {
          min-width: 64px;
          max-height: 64px;
          border-radius: 50%;
          border: 2px solid ${(props) => props.theme.secondary};
          overflow: clip;
          img {
            width: 64px;
            height: 64px;
            object-fit: cover;
            object-position: center center;
          }
        }

        p.drop-image {
          width: 100%;
          padding: 0.5rem 0;
          border: 1px dashed ${(props) => props.theme.gray_700};
          color: ${(props) => props.theme.gray_700};
          border-radius: ${radii.lg};
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            border-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.primary};
          }
        }
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

      button.register {
        width: 100%;
        height: 3rem;
        border-radius: ${radii.lg};
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};
        font-weight: ${fontWeights.regular};
        font-size: ${fontSizes.md};
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.primary_dark};
        }
      }
    }

    button.to-login {
      color: ${(props) => props.theme.primary};
    }
  }
`;
