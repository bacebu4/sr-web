import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useHomeScreenQuery } from "../generated/graphql";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProgressBar } from "../components/ProgressBar";
import { FlexBox } from "../components/FlexBox";
import { SeeAll } from "../components/SeeAll";
import { Book } from "../components/Book";
import { Title } from "../components/Title";
import { Tag, TagContainer } from "../components/Tag";
import { Card } from "../components/Card";
import { UserInfo } from "../components/UserInfo";
import { ROUTES } from "../routes";

const RightMenu = styled.div`
  position: fixed;
  z-index: 100;

  max-width: inherit;

  transform: translateX(-100%);
`;

const LayoutWrapper = styled.main`
  position: relative;

  margin: 0 auto;
  padding: 44px 18px 0;
  max-width: 860px;
  min-height: calc(100vh);
`;

const RightMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  max-width: 250px;
  padding: inherit;
`;

const LeftMenuWrapper = styled.div`
  max-width: 500px;
`;

const LeftMenuInner = styled.div`
  min-height: 100%;
`;

const PushForStickyFooter = styled.div`
  height: 100px;
`;

// export const HOME_SCREEN_QUERY = gql`
//   query HomeScreen {
//     info {
//       reviewAmount
//       email
//       latestReviewDate
//       streakBeginningDate
//       missed
//       reviewed
//       streak
//       id
//     }
//     dailyNotesIds
//     latestBooks {
//       id
//       title
//       author
//     }
//     tags(type: "latest") {
//       id
//       name
//       hue
//     }
//   }
// `;

export const MainContainer: React.FC = ({ children }) => {
  const { t } = useTranslation();

  const [result, reexecuteHomeScreenQuery] = useHomeScreenQuery();
  const { data, error } = result;
  const { latestBooks } = { ...data };

  return (
    <>
      <Navbar />
      <LayoutWrapper>
        <LeftMenuWrapper>
          <LeftMenuInner>
            {children}
            <PushForStickyFooter />
          </LeftMenuInner>
          <Footer />
        </LeftMenuWrapper>

        <RightMenuWrapper>
          <RightMenu>
            <UserInfo />
            <ProgressBar mt={16} />

            <FlexBox jc="space-between" mt={44}>
              <Title title={t("Latest reads")} />
              <Link to={ROUTES.books}>
                <SeeAll />
              </Link>
            </FlexBox>

            <FlexBox mt={32}>
              {latestBooks?.length &&
                latestBooks?.slice(0, 2).map((book, i) => {
                  if (book)
                    return (
                      <Book key={book?.id} book={book} ml={i > 0 ? 36 : 0} />
                    );
                  return <></>;
                })}
            </FlexBox>

            <FlexBox jc="space-between" mt={44}>
              <Title title={t("Notes")} />
              <Link to={ROUTES.notes}>
                <SeeAll />
              </Link>
            </FlexBox>
            <Card mt={32} variant="widget" />

            <FlexBox jc="space-between" mt={44}>
              <Title title={t("Recent tag")} />
              <SeeAll />
            </FlexBox>

            <TagContainer mt={16}>
              <Tag />
              <Tag />
              <Tag />
              <Tag />
            </TagContainer>
          </RightMenu>
        </RightMenuWrapper>
      </LayoutWrapper>
    </>
  );
};
