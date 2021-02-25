import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK, OPACITY10, OPACITY1, WHITE } from "../utils/colors";
import { PaperPlane } from "./PaperPlane";

type VariantType = "base" | "send";

type InputAreaStyledType = {
  mt?: number;
  ml?: number;

  variant?: VariantType;
};

const InputWrapper = styled.div<{ maxWidth?: string }>`
  position: relative;
  max-width: ${(props) => props.maxWidth};
  width: 100%;
`;

const InputArea = styled.input<InputAreaStyledType>`
  margin-top: ${(props) => props.mt}px;
  margin-left: ${(props) => props.ml}px;

  font-family: inherit;
  font-size: 1rem;
  padding: 10px 16px;
  width: 100%;

  background-color: ${GRAY}${OPACITY10};
  border-radius: 14px;
  border: 1px solid ${GRAY}${OPACITY1};
  color: ${DARK};
  outline: none;

  ${(props) => {
    if (props.variant === "send") {
      return `
    background-color: ${WHITE};
    padding-right: 44px;
    `;
    }
    return "";
  }}

  :focus {
    border: 1px solid ${DARK};
  }

  ::placeholder {
    color: ${GRAY};
  }
`;

const PaperPlaneWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
`;

interface BaseInputType extends InputHTMLAttributes<HTMLInputElement> {
  mt?: number;
  ml?: number;
  maxWidth?: string;
  variant?: VariantType;
}

export const BaseInput: React.FC<BaseInputType> = ({
  variant = "base",
  onClick,
  maxWidth,
  ...rest
}) => {
  return (
    <InputWrapper maxWidth={maxWidth}>
      <InputArea type="text" variant={variant} {...rest} />
      {variant === "send" && (
        <PaperPlaneWrapper onClick={onClick}>
          <PaperPlane />
        </PaperPlaneWrapper>
      )}
    </InputWrapper>
  );
};
