import { mockApi } from "../../../../services/mock-api";
import { BalanceHistoryChart } from "./BalanceHistoryChart";

export const BalanceHistoryContent = () => {
  const data = mockApi.getBalanceHistory.read();

  return <BalanceHistoryChart data={data} />;
};
