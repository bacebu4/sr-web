import styled from "styled-components";
import { GRAY, WHITE } from "../utils/colors";
import { FlexBox } from "./FlexBox";
import cover from "../assets/cover.png";
import { Dots } from "./Dots";

const CardWrapper = styled.section`
  background-color: ${WHITE};
  border-radius: 20px;
  padding: 32px;
  font-family: "Abhaya Libre", serif;
  font-size: 1.125rem;
`;

const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.4;
`;

const CardAuthor = styled.h3`
  font-size: 1.125rem;
  color: ${GRAY};
`;

const TextWrapper = styled.p`
  text-align: justify;
  line-height: 1.4;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export const Card: React.FC = () => {
  return (
    <CardWrapper>
      <FlexBox>
        <img width={48} src={cover} alt="4 Hour Workweek Book cover" />
        <FlexBox direction="column" ml={16}>
          <CardTitle>4 Hour Workweek</CardTitle>
          <CardAuthor>Tim Ferris</CardAuthor>
        </FlexBox>
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
    </CardWrapper>
  );
};
