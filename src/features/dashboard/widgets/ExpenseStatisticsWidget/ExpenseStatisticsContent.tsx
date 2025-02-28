import { mockApi } from "../../../../services/mock-api";
import { ExpenseStatisticsChart } from "./ExpenseStatisticsChart";

export const ExpenseStatisticsContent = () => {
  const data = mockApi.getExpenseStatistics.read();

  return <ExpenseStatisticsChart data={data} />;
};
