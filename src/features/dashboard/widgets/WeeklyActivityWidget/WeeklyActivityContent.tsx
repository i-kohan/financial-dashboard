import { mockApi } from "../../../../services/mock-api";
import { WeeklyActivityChart } from "./WeeklyActivityChart";

export const WeeklyActivityContent = () => {
  const data = mockApi.getWeeklyActivity.read();
  return <WeeklyActivityChart data={data} />;
};
