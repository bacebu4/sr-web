import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK, OPACITY10, OPACITY1 } from "../utils/colors";

const InputArea = styled.input<{ mt?: number; ml?: number }>`
  margin-top: ${(props) => props.mt}px;
  margin-left: ${(props) => props.ml}px;

  font-size: 0.875rem;
  padding: 8px 12px;
  background-color: ${GRAY}${OPACITY10};
  border-radius: 14px;
  border: 1px solid ${GRAY}${OPACITY1};
  color: ${DARK};

  :focus {
    border: 1px solid ${DARK};
  }

  ::placeholder {
    color: ${GRAY};
  }
`;

interface BaseInputType extends InputHTMLAttributes<HTMLInputElement> {
  mt?: number;
  ml?: number;
}

export const BaseInput: React.FC<BaseInputType> = ({ ...rest }) => {
  return <InputArea {...rest} />;
};
