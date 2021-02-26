import styled from "styled-components";
import { GRAY, WHITE } from "../utils/colors";
import { FlexBox } from "./FlexBox";
import { Dots } from "./Dots";
import { withLayoutStyles } from "./LayoutStyles";

const CommentWrapper = styled.section`
  background-color: ${WHITE};
  border-radius: 20px;
  padding: 32px;
  font-family: "Abhaya Libre", serif;
  font-size: 1.125rem;
`;

const CommentDate = styled.h3`
  font-size: 1rem;
  color: ${GRAY};
`;

const TextWrapper = styled.p`
  text-align: justify;
  line-height: 1.4;
  margin-top: 4px;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
`;

type CommentProps = {
  className?: string;
};

export const CommentLayout: React.FC<CommentProps> = ({ className }) => {
  return (
    <CommentWrapper className={className}>
      <FlexBox jc="space-between" ai="center">
        <CommentDate>2020/08/02</CommentDate>
        <ButtonWrapper>
          <Dots />
        </ButtonWrapper>
      </FlexBox>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, itaque
        quos vitae quam reiciendis tenetur distinctio officiis corrupti quis
        ratione cupiditate ex praesentium voluptates sed! Quisquam sint in
        nostrum porro!
      </TextWrapper>
    </CommentWrapper>
  );
};

export const Comment = withLayoutStyles(CommentLayout);
