import styled from "styled-components";
import {buttonsType} from './constants';


export const ButtonContainer = styled.button`
  font-size: 1.5rem;
  line-height: 1.6;
  background: ${({ theme, buttonType, layer }) =>
    buttonType === "light"
      ? theme.colors[buttonType][4]
      : theme.colors[buttonType][layer]};
  color: #fff;
  border-radius: 0.4rem;
  height: 4.2rem;
  min-width: 8rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  font-family: "Avenir";
  position:relative;
  letter-spacing: 0.02rem;
  border: 1px solid
    ${({ buttonType, theme, layer }) =>
      buttonType === "light"
        ? theme.colors[buttonType][4]
        : theme.colors[buttonType][layer]};
  &.circle {
    border-radius: 2.1rem;
  }
  &.big {
    height: 5.2rem;
    &.circle {
      border-radius: 2.6rem;
    }
  }
  svg {
    path {
      transition: all 200ms ease-in-out;
    }
  }
  &.small {
    height: 3.2rem;
    font-size: 1.4rem;
    font-family: "Avenir";
    &.circle {
      border-radius: 1.6rem;
    }
  }
  &.contained {
    color: ${({ theme, buttonType }) =>
    buttonsType.some((item) => buttonType === item)
        ? theme.colors.light[4]
        : theme.colors.dark[0]};
    &:hover {
      background: ${({ theme, buttonType, layer }) =>
        theme.colors[buttonType][layer + 1]};
      border-color: ${({ theme, buttonType, layer }) =>
        theme.colors[buttonType][layer + 1]};
    }
    &:active {
      background: ${({ theme, buttonType }) => theme.colors[buttonType][0]};
      border-color: ${({ theme, buttonType }) => theme.colors[buttonType][0]};
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
    }
    &:focus {
      border-color: ${({ theme, buttonType }) =>
        theme.colors[buttonType][4] || theme.colors[buttonType][3]};
    }
    .icon {
      svg {
        path {
          stroke: ${({ theme, buttonType }) =>
          buttonsType.some((item) => buttonType === item)
              ? theme.colors.light[4]
              : theme.colors.dark[0]};
        }
      }
    }
  }
  &.outlined {
    background: transparent;
    color: ${({ theme, buttonType }) => theme.colors[buttonType][0]};
    border-color: ${({ theme, buttonType }) => theme.colors[buttonType][0]};
    &:hover {
      color: ${({ theme, buttonType }) =>
        buttonType === "light"
          ? theme.colors.dark[0]
          : theme.colors[buttonType][1]};
      background: ${({ theme, buttonType }) =>
        theme.colors[buttonType].length > 5
          ? theme.colors[buttonType][6]
          : theme.colors[buttonType][4]};
      border-color: ${({ theme, buttonType }) => theme.colors[buttonType][3]};
      path {
        stroke: ${({ theme, buttonType }) =>
          buttonType === "light"
            ? theme.colors.dark[0]
            : theme.colors[buttonType][1]} !important;
      }
    }
    &:active {
      background: ${({ theme, buttonType }) => theme.colors[buttonType][4]};
      border-color: ${({ theme, buttonType }) => theme.colors[buttonType][2]};
      box-shadow: ${({ theme }) => theme.elevation[2].shadow};
    }
    &:focus {
      border-color: ${({ theme, buttonType }) => theme.colors[buttonType][0]};
    }
    .icon {
      svg {
        path {
          stroke: ${({ theme, buttonType }) => theme.colors[buttonType][1]};
        }
      }
    }
  }
  &.link {
    background: transparent;
    border: 0;
    text-decoration: underline;
    display: inline;
    color: ${({ color, theme }) =>
      color ? theme.colors[color][1] : theme.colors.blue[1]} !important;
    box-shadow: none;
    padding: 0;
    font-size: 1.4rem;
    &:hover {
      text-decoration: none;
    }
  }
  &.text {
    background: transparent;
    border: 0;
    display: inline;
    color: ${({ color, theme }) => (color ? color : theme.colors.dark[1])};
    box-shadow: none;
    &:hover {
      background: ${({ theme, buttonType }) => theme.colors.primary[3]};
    }
  }
  &.ghost {
    background: transparent;
    border: 0;
    display: inline;
    color: ${({ color, theme }) => (color ? color : theme.colors.dark[1])};
    box-shadow: none;
    &:hover {
      background: ${({ theme, buttonType, layer }) =>
        theme.colors[buttonType][layer]};
    }
  }
  &.squared {
    border-radius: 0;
  }
  &.block {
    display: block;
    width: 100%;
  }
  &.disabled {
    background: ${({ theme, buttonType }) => theme.colors.gray[3]} !important;
    color: ${({ theme, buttonType }) => theme.colors.dark[4]} !important;
    box-shadow: none;
    border-color: ${({ theme, buttonType }) =>
      theme.colors.light[0]} !important;
    cursor: not-allowed !important;
  }
  &.loading {
    overflow:hidden !important;
    background: ${({ theme, buttonType }) =>
      theme.colors[buttonType].length > 5
        ? theme.colors[buttonType][3]
        : theme.colors.gray[3]} !important;
    box-shadow: none;
    border-color: ${({ theme, buttonType }) =>
      theme.colors.light[0]} !important;
    cursor: not-allowed !important;
  }
  &.withIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    &.left {
      flex-direction: row-reverse;
    }
    & > .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.icon {
    min-width: auto;
    padding: 0 1rem;
    svg {
      path {
        ${({ theme, fill, buttonType }) => {
          if (fill) {
            return {
              fill: buttonsType.some((item) => buttonType === item)
                ? theme.colors.light[4]
                : theme.colors.dark[0],
            };
          }
          return {
            stroke: buttonsType.some((item) => buttonType === item)
              ? theme.colors.light[4]
              : theme.colors.dark[0],
          };
        }}
      }
    }
    &.big {
      width: 5.2rem;
      height: 5.2rem;
      &.circle {
        border-radius: 2.6rem;
      }
    }
  }
  &.flex {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &.mg {
    margin: ${({ mg }) => mg};
  }
  .spinner__container{
    position:absolute;
    background: inherit;
    z-index:10;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
`;
