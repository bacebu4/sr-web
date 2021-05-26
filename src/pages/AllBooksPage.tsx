import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Book } from "../components/Book";
import { Title } from "../components/Title";
import { useLatestBooksQuery } from "../generated/graphql";
import { ROUTES } from "../utils/constants";

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const BookWrapper = styled.div<{
  positionInRow: "start" | "center" | "end";
  row: number;
}>`
  grid-row: ${(p) => `${p.row + 1}/${p.row + 2}`};
  justify-self: ${(p) => p.positionInRow};
`;

export const AllBooksPage: React.FC = () => {
  const { t } = useTranslation();

  const [result] = useLatestBooksQuery();
  const { data } = result;

  const getPositioningByIndex = (index: number): "start" | "center" | "end" => {
    switch ((index + 1) % 3) {
      case 1:
        return "start";
      case 2:
        return "center";
      default:
        return "end";
    }
  };

  return (
    <>
      <Title
        variant="large"
        title={t("All books")}
        subtitle={`${data?.latestBooks?.length} ${t(
          "total books were captured"
        )}`}
      />
      <BooksWrapper>
        {data?.latestBooks?.map((book, i) => {
          if (book)
            return (
              <BookWrapper
                row={i / 3}
                positionInRow={getPositioningByIndex(i)}
                key={book.id}
              >
                <Link to={`${ROUTES.books}/:${book.id}`}>
                  <Book variant="big" book={book} mt={24} />
                </Link>
              </BookWrapper>
            );
          return <></>;
        })}
      </BooksWrapper>
    </>
  );
};
