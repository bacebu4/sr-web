import styled from "styled-components";
import cover from "../assets/cover.png";
import { withLayoutStyles } from "./LayoutStyles";
import { Title } from "./Title";

const BookInfoWrapper = styled.div`
  margin-top: 16px;

  width: 86px;
`;

type BookType = {
  className?: string;
};

const BookLayout: React.FC<BookType> = ({ className }) => {
  return (
    <div className={className}>
      <img width="86px" src={cover} alt="Book cover" />
      <BookInfoWrapper>
        <Title variant="book" title="Anna Karenina" subtitle="Lev Tolstoy" />
      </BookInfoWrapper>
    </div>
  );
};

export const Book = withLayoutStyles(BookLayout);
