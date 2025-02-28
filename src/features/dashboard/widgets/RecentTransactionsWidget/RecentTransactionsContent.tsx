import { mockApi } from "../../../../services/mock-api";
import { TransactionItem } from "./TransactionItem";

export const RecentTransactionsContent = () => {
  const data = mockApi.getTransactions.read();

  return (
    <div className="space-y-2">
      {data.map((tx) => (
        <TransactionItem
          key={tx.id}
          type={tx.transactionType}
          description={tx.description}
          date={tx.date}
          amount={tx.amount}
        />
      ))}
    </div>
  );
};
