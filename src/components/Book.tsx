import styled from "styled-components";
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

const BookImageWrapper = styled.img`
  width: inherit;
  height: auto;
`;

type BookType = {
  className?: string;
  variant?: VariantType;
};

const BookLayout: React.FC<BookType> = ({ className, variant = "small" }) => {
  function getTitleVariant(bookVariant: VariantType): "book" | "book large" {
    if (bookVariant === "big") {
      return "book large";
    }
    return "book";
  }

  return (
    <BookWrapper className={className} variant={variant}>
      <BookImageWrapper src={cover} alt="Book cover" />
      <BookInfoWrapper>
        <Title
          variant={getTitleVariant(variant)}
          title="Anna Karenina"
          subtitle="Lev Tolstoy"
        />
      </BookInfoWrapper>
    </BookWrapper>
  );
};

export const Book = withLayoutStyles(BookLayout);
