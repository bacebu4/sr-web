import styled from "styled-components";
import { Book as BookType } from "../generated/graphql";
import cover from "../assets/cover.png";
import { withLayoutStyles } from "./LayoutStyles";
import { Title } from "./Title";

type VariantType = "big" | "small";

const BookWrapper = styled.div<{ variant?: VariantType }>`
  width: ${(p) => (p.variant === "big" ? "109" : "86")}px;
`;

const BookInfoWrapper = styled.div`
  margin-top: 16px;
`;

const BookCover = styled.img`
  width: inherit;

  border-radius: 4px;
`;

type BookPropsType = {
  className?: string;
  variant?: VariantType;
  book: BookType;
};

const BookLayout: React.FC<BookPropsType> = ({
  className,
  variant = "small",
  book,
}) => {
  function getTitleVariant(bookVariant: VariantType): "book" | "book large" {
    if (bookVariant === "big") {
      return "book large";
    }
    return "book";
  }

  return (
    <BookWrapper className={className} variant={variant}>
      <BookCover src={cover} alt="Book cover" />
      <BookInfoWrapper>
        <Title
          variant={getTitleVariant(variant)}
          title={book.title}
          subtitle={book.author}
        />
      </BookInfoWrapper>
    </BookWrapper>
  );
};

export const Book = withLayoutStyles(BookLayout);
