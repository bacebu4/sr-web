import styled from "styled-components";
import { GRAY, WHITE } from "../utils/colors";
import { FlexBox } from "./FlexBox";
import cover from "../assets/cover.png";
import { Dots } from "./Dots";
import { withLayoutStyles } from "./LayoutStyles";

type VariantType = "base" | "dense";

const CardWrapper = styled.section<{ variant: VariantType }>`
  position: relative;
  padding: ${(p) => (p.variant === "base" ? "32" : "24")}px;

  font-family: "Abhaya Libre", serif;
  font-size: 1.125rem;

  background-color: ${WHITE};
  border-radius: 20px;
`;

const CardTitle = styled.h2<{ variant: VariantType }>`
  font-weight: 600;
  font-size: ${(p) => (p.variant === "base" ? "1.375" : "1.125")}rem;

  line-height: 1.2;
`;

const CardAuthor = styled.h3`
  margin-top: 3px;

  font-size: 1.125rem;
  color: ${GRAY};
`;

const TextWrapper = styled.p<{ variant: VariantType }>`
  margin-top: 16px;

  ${(p) =>
    p.variant === "dense" &&
    `height: 100px;
    margin-top: 10px;

    overflow: hidden;
    text-overflow: ellipsis;`}

  text-align: justify;
  line-height: 1.4;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const BookCoverWrapper = styled.div`
  width: 48px;
  height: auto;
`;

const BookCover = styled.img`
  width: inherit;

  border-radius: 3px;
`;

const GradientText = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 60px;
  background-image: linear-gradient(to bottom, transparent, white);
`;

type CardProps = {
  className?: string;
  variant?: VariantType;
};

export const CardLayout: React.FC<CardProps> = ({
  className,
  variant = "base",
}) => {
  return (
    <CardWrapper className={className} variant={variant}>
      <FlexBox>
        <BookCoverWrapper>
          <BookCover src={cover} alt="4 Hour Workweek Book cover" />
        </BookCoverWrapper>
        <FlexBox direction="column" ml={16}>
          <CardTitle variant={variant}>4 Hour Workweek</CardTitle>
          <CardAuthor>Tim Ferris</CardAuthor>
        </FlexBox>
        <ButtonWrapper>
          <Dots />
        </ButtonWrapper>
      </FlexBox>
      <TextWrapper variant={variant}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, itaque
        quos vitae quam reiciendis tenetur distinctio officiis corrupti quis
        ratione cupiditate ex praesentium voluptates sed! Quisquam sint in
        nostrum porro!
      </TextWrapper>
      {variant === "dense" && <GradientText />}
    </CardWrapper>
  );
};

export const Card = withLayoutStyles(CardLayout);
