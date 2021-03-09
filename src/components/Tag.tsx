import styled from "styled-components";
import { withLayoutStyles } from "./LayoutStyles";

const TagWrapper = styled.div`
  display: inline-block;
  padding: 12px 16px;
  margin-left: 16px;
  margin-top: 16px;

  font-family: "Abhaya Libre", serif;
  font-size: 1rem;
  font-weight: 400;
  color: #ff0b1f;

  background-color: #ff0b1f1a;
  border-radius: 40px;

  white-space: nowrap;
`;

export const Tag: React.FC = () => {
  return <TagWrapper>Tag name</TagWrapper>;
};

const TagContainerLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`;

export const TagContainer = withLayoutStyles(TagContainerLayout);
