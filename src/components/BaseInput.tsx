import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK, OPACITY10, OPACITY1, WHITE } from "../utils/colors";
import { PaperPlane } from "./PaperPlane";
import { withLayoutStyles } from "./LayoutStyles";

type VariantType = "base" | "send";

type InputAreaStyledType = {
  variant?: VariantType;
};

const InputWrapper = styled.div<{ maxWidth?: string }>`
  position: relative;
  max-width: ${(props) => props.maxWidth};
  width: 100%;
`;

const InputArea = styled.input<InputAreaStyledType>`
  width: 100%;
  padding: 9px 15px;

  font-family: inherit;
  font-size: 1rem;
  line-height: 20px;
  color: ${DARK};

  background-color: ${GRAY}${OPACITY10};
  border-radius: 14px;
  border: 1px solid ${GRAY}${OPACITY1};

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
  bottom: 9px;
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
  maxWidth,
  ...rest
}) => {
  return (
    <InputWrapper className={className} maxWidth={maxWidth}>
      <InputArea type="text" variant={variant} {...rest} />

      {variant === "send" && (
        <PaperPlaneWrapper onClick={onClick}>
          <PaperPlane />
        </PaperPlaneWrapper>
      )}
    </InputWrapper>
  );
};

export const BaseInput = withLayoutStyles(BaseInputLayout);
