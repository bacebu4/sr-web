import ProgressLabel from "react-progress-label";
import styled from "styled-components";
import { PURPLE, GRAY, OPACITY50 } from "../utils/colors";
import { FlexBox } from "./FlexBox";
import { withLayoutStyles } from "./LayoutStyles";

const ProgressBarTitle = styled.h3`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 600;

  color: ${PURPLE};
`;

type ProgressBarType = {
  className?: string;
};

const ProgressBarLayout: React.FC<ProgressBarType> = ({ className }) => {
  return (
    <FlexBox className={className}>
      {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //@ts-ignore */}
      <ProgressLabel
        progress={30}
        progressColor={PURPLE}
        size={16}
        progressWidth={3}
        trackWidth={3}
        cornersWidth={1.25}
        trackBorderWidth={1}
        trackColor={GRAY + OPACITY50}
        trackBorderColor="#fff"
        style={{ marginRight: "16px" }}
      />
      <ProgressBarTitle>Review Process</ProgressBarTitle>
    </FlexBox>
  );
};

export const ProgressBar = withLayoutStyles(ProgressBarLayout);
