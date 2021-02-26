import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK, OPACITY10, OPACITY1, WHITE } from "../utils/colors";
import { PaperPlane } from "./PaperPlane";
import { withLayoutStyles } from "./LayoutStyles";

type VariantType = "base" | "send";

type InputAreaStyledType = {
  mt?: number;
  ml?: number;

  variant?: VariantType;
};

const InputWrapper = styled.div<{ maxWidth?: string }>`
  position: relative;
  max-width: ${(props) => props.maxWidth};
`;

const InputArea = styled.input<InputAreaStyledType>`
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
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
  bottom: 10px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
`;

interface BaseInputType extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: string;
  variant?: VariantType;
  className?: string;
}

const BaseInputLayout: React.FC<BaseInputType> = ({
  variant = "base",
  onClick,
  className,
  ...rest
}) => {
  return (
    <InputWrapper>
      <InputArea
        type="text"
        variant={variant}
        {...rest}
        className={className}
      />
      {variant === "send" && (
        <PaperPlaneWrapper onClick={onClick}>
          <PaperPlane />
        </PaperPlaneWrapper>
      )}
    </InputWrapper>
  );
};

export const BaseInput = withLayoutStyles(BaseInputLayout);
