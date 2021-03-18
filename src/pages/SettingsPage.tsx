import { useState } from "react";
import styled from "styled-components";
import { BaseButton } from "../components/BaseButton";
import { FlexBox } from "../components/FlexBox";
import { Counter } from "../components/Counter";
import { withLayoutStyles } from "../components/LayoutStyles";
import { Title } from "../components/Title";
import { GRAY } from "../utils/colors";

const SettinTitle = withLayoutStyles(styled.h4`
  font-family: "Poppins";
  font-size: 1.125rem;
  font-weight: 400;
`);

const SettingsSubtitle = withLayoutStyles(styled.h5`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 400;
  color: ${GRAY};
`);

export const SettingsPage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Title
        variant="large"
        title="Account settings"
        subtitle="Quick description of what user can do in this section"
      />

      <FlexBox jc="space-between" ai="center" mt={32}>
        <SettinTitle>Hightlights per day</SettinTitle>
        <Counter counter={counter} setCounter={setCounter} />
      </FlexBox>

      <SettingsSubtitle mt={16}>
        Configure how much highlights you want to see on a daily basis
      </SettingsSubtitle>
      <SettinTitle mt={28}>Restart manual</SettinTitle>
      <SettingsSubtitle mt={16}>
        Click this button if you want to see thr tutorial all over again in case
        you miss something
      </SettingsSubtitle>
      <SettinTitle mt={28}>Show terms and conditions</SettinTitle>
      <SettinTitle mt={28}>Show privacy policy</SettinTitle>
      <BaseButton mt={28}>Sign Out</BaseButton>
    </>
  );
};
