import styled from "styled-components";
import { GRAY } from "../utils/colors";
import { withLayoutStyles } from "./LayoutStyles";

type VariantType = "large" | "medium" | "small";

type TitleType = {
  variant?: VariantType;
  title: string;
  subtitle?: string;
  mt?: number;
};

const TitleWrapper = styled.div`
  font-family: "'Abhaya Libre', serif";
`;

const TitleLarge = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.8;
`;

const TitleLargeSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins";
  color: ${GRAY};
`;

const TitleMedium = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.4;
`;

const TitleMediumSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${GRAY};
`;

const TitleSmall = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Poppins";
  color: ${GRAY};
`;

const TitleToTransform: React.FC<TitleType> = ({
  variant = "small",
  title,
  subtitle,
}) => {
  function getTitleAndSubtitleByType(
    styleType: VariantType,
    titleText: string,
    subtitleText?: string
  ): React.ReactNode {
    switch (styleType) {
      case "large":
        return (
          <>
            <TitleLarge>{titleText}</TitleLarge>
            <TitleLargeSubtitle>{subtitleText}</TitleLargeSubtitle>
          </>
        );
      case "medium":
        return (
          <>
            <TitleMedium>{titleText}</TitleMedium>
            <TitleMediumSubtitle>{subtitleText}</TitleMediumSubtitle>
          </>
        );
      default:
        return <TitleSmall>{titleText}</TitleSmall>;
    }
  }

  return (
    <TitleWrapper>
      {getTitleAndSubtitleByType(variant, title, subtitle)}
    </TitleWrapper>
  );
};

export const Title = withLayoutStyles(TitleToTransform);
