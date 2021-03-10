import styled from "styled-components";
import { Card } from "../components/Card";
import { Title } from "../components/Title";

const CardsWrapper = styled.div`
  margin-top: 24px;
`;

export const BookPage: React.FC = () => {
  return (
    <>
      <Title variant="large" title="War and Peace" subtitle="Lev Tolstoy" />
      <CardsWrapper>
        <Card variant="dense" mt={16} />
        <Card variant="dense" mt={16} />
        <Card variant="dense" mt={16} />
      </CardsWrapper>
    </>
  );
};
