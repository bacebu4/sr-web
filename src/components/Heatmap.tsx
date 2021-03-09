import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import { withLayoutStyles } from "./LayoutStyles";

type HeatmapProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  className?: string;
};

const today = new Date();

function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count: number) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeatmapLayout: React.FC<HeatmapProps> = ({ data, className }) => {
  const randomValues = getRange(400).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 1),
    };
  });
  return (
    <div className={className}>
      <CalendarHeatmap
        startDate={shiftDate(today, -180)}
        endDate={today}
        values={randomValues}
        classForValue={(value) => {
          if (value.count === 0) {
            return "empty";
          }
          return "active";
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tooltipDataAttrs={(value: any) => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        showWeekdayLabels={false}
        showMonthLabels={false}
      />
      <ReactTooltip />
    </div>
  );
};

export const Heatmap = withLayoutStyles(HeatmapLayout);
