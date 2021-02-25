import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK, OPACITY10, OPACITY1, WHITE } from "../utils/colors";
import { PaperPlane } from "./PaperPlane";

type VariantType = "base" | "send";

type InputAreaStyledType = {
  mt?: number;
  ml?: number;
  maxWidth?: number;
  variant?: VariantType;
};

const InputWrapper = styled.div`
  position: relative;
`;

const InputArea = styled.input<InputAreaStyledType>`
  margin-top: ${(props) => props.mt}px;
  margin-left: ${(props) => props.ml}px;

  max-width: ${(props) => props.maxWidth}px;
  width: 100%;

  font-size: 0.875rem;
  padding: 10px 16px;
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

  bottom: 7px;
  right: 16px;
  z-index: 1;
`;

interface BaseInputType extends InputHTMLAttributes<HTMLInputElement> {
  mt?: number;
  ml?: number;
  maxWidth?: number;
  variant?: VariantType;
}

export const BaseInput: React.FC<BaseInputType> = ({
  variant = "base",
  ...rest
}) => {
  return (
    <InputWrapper>
      <InputArea variant={variant} {...rest} />
      {variant === "send" && (
        <PaperPlaneWrapper>
          <PaperPlane />
        </PaperPlaneWrapper>
      )}
    </InputWrapper>
  );
};
