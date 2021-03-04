import styled from "styled-components";
import { PINK, WHITE, DARK } from "../utils/colors";
import { withLayoutStyles } from "./LayoutStyles";

const StyledButton = styled.button<{ maxWidth?: string }>`
  padding: 9px 15px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};

  font-family: "Abhaya Libre", serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
  color: ${WHITE};

  border: 1px solid ${PINK};
  border-radius: 14px;
  outline: none;
  background-color: ${PINK};

  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    border: 1px solid ${DARK};
  }
`;

export const BaseButton = withLayoutStyles(StyledButton);
