import styled from "styled-components";

const TagWrapper = styled.div`
  display: inline-block;
  padding: 12px 16px;
  margin-left: 16px;
  background-color: #ff0b1f1a;
  color: #ff0b1f;
  border-radius: 40px;
`;

export const Tag: React.FC = () => {
  return <TagWrapper>Tag name</TagWrapper>;
};

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`;
