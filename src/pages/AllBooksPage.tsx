import styled from "styled-components";
import { Book } from "../components/Book";
import { Title } from "../components/Title";

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 500px;
`;

const BookWrapper = styled.div<{
  positionInRow: "start" | "center" | "end";
  row: number;
}>`
  grid-row: ${(p) => `${p.row + 1}/${p.row + 2}`};
  justify-self: ${(p) => p.positionInRow};
`;

// array to test map
const books = [1, 1, 1, 1, 1, 1, 1];

export const AllBooksPage: React.FC = () => {
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
        title="All books"
        subtitle="26 total books were captured"
      />
      <BooksWrapper>
        {books.map((_, i) => (
          <BookWrapper row={i / 3} positionInRow={getPositioningByIndex(i)}>
            <Book variant="big" mt={24} />
          </BookWrapper>
        ))}
      </BooksWrapper>
    </>
  );
};
