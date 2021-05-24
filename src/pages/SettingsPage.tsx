import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BaseButton } from "../components/BaseButton";
import { FlexBox } from "../components/FlexBox";
import { Counter } from "../components/Counter";
import { withLayoutStyles } from "../components/LayoutStyles";
import { Title } from "../components/Title";
import { GRAY } from "../utils/colors";
import { UserContext } from "../userStore/userContext";
import { TOKEN_LOCALSTORAGE_KEY } from "../utils/constants";
import {
  useInfoQuery,
  useUpdateReviewAmountMutation,
} from "../generated/graphql";

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
  const { t } = useTranslation();

  const { setToken } = useContext(UserContext);

  const [counterReviewAmount, setCounterReviewAmount] = useState(0);
  const [result] = useInfoQuery();
  const { data } = result;
  const [, updateReviewAmount] = useUpdateReviewAmountMutation();

  useEffect(() => {
    if (data?.info?.reviewAmount) {
      setCounterReviewAmount(data?.info?.reviewAmount);
    }
  }, [data]);

  useEffect(() => {
    const upd = async () =>
      updateReviewAmount({ reviewAmount: counterReviewAmount });
    upd();
  }, [counterReviewAmount, updateReviewAmount]);

  return (
    <>
      <Title
        variant="large"
        title={t("Account settings")}
        subtitle={t("Manage your account settings")}
      />

      <FlexBox jc="space-between" ai="center" mt={32}>
        <SettinTitle>{t("Highlights per day")}</SettinTitle>
        <Counter
          counter={counterReviewAmount}
          setCounter={setCounterReviewAmount}
        />
      </FlexBox>

      <SettingsSubtitle mt={16}>
        {t("Configure how much highlights you want to see on a daily basis")}
      </SettingsSubtitle>
      <SettinTitle mt={28}>{t("Restart manual")}</SettinTitle>
      <SettingsSubtitle mt={16}>
        {t(
          "Click this button if you want to see tutorial all over again in case you miss something"
        )}
      </SettingsSubtitle>
      <SettinTitle mt={28}>{t("Show terms and conditions")}</SettinTitle>
      <SettinTitle mt={28}>{t("Show privacy policy")}</SettinTitle>
      <BaseButton
        onClick={() => {
          setToken("");
          localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
        }}
        mt={28}
      >
        {t("Sign out")}
      </BaseButton>
    </>
  );
};
