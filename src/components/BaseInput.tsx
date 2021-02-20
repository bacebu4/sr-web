import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GRAY, DARK } from "../utils/colors";

const InputArea = styled.input<{ margin?: string }>`
  margin: ${(props) => props.margin};

  font-size: 1rem;
  padding: 8px 12px;
  background-color: ${GRAY}1A;
  border-radius: 9px;
  border: 1px solid ${GRAY}03;
  outline: none;
  color: ${DARK};

  :focus {
    border: 1px solid ${DARK};
  }

  ::placeholder {
    color: ${GRAY};
  }
`;

type BaseInputType = InputHTMLAttributes<HTMLInputElement>;

export const BaseInput: React.FC<BaseInputType> = ({ ...rest }) => {
  return <InputArea {...rest} />;
};
