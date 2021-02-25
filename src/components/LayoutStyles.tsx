/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import styled, { StyledComponent } from "styled-components";

type LayoutStylesProps = {
  mt?: number;
  ml?: number;
};

export function withLayoutStyles<P>(
  Component: React.FC<P>
): StyledComponent<React.FC<P>, object, P & LayoutStylesProps, never> {
  const ComponentWithAdded = styled(Component)<LayoutStylesProps & P>`
    margin-top: ${(props) => props.mt}px;
    margin-left: ${(props) => props.ml}px;
  `;

  return ComponentWithAdded;
}
