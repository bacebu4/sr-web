import { BaseButton } from "../components/BaseButton";
import { BaseInput } from "../components/BaseInput";
import { Card } from "../components/Card";
import { Comment } from "../components/Comment";
import { Heatmap } from "../components/Heatmap";
import { Title } from "../components/Title";

export const HomePage: React.FC = () => {
  return (
    <>
      <Title
        variant="large"
        title="Highlight of the day"
        subtitle="Click on the button below to see the rest of your highlights"
      />
      <Card mt={32} />
      <Comment mt={16} />
      <BaseButton mt={16} type="button">
        Start review process
      </BaseButton>
      <BaseInput variant="send" placeholder="Add new comment..." mt={16} />
      <Title
        variant="large"
        mt={32}
        title="Reviewing goals"
        subtitle="Don’t forget what you read. Review your notes daily!"
      />

      <Heatmap mt={32} />
    </>
  );
};
