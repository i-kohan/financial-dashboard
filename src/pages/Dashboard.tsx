import { DashboardLayout } from "../features/dashboard/layouts/DashboardLayout";
import { BalanceHistoryWidget } from "../features/dashboard/widgets/BalanceHistoryWidget/BalanceHistoryWidget";
import { ExpenseStatisticsWidget } from "../features/dashboard/widgets/ExpenseStatisticsWidget/ExpenseStatisticsWidget";
import { MyCardsWidget } from "../features/dashboard/widgets/MyCardsWidget/MyCardsWidget";
import { QuickTransferWidget } from "../features/dashboard/widgets/QuickTransferWidget/QuickTransferWidget";
import { RecentTransactionsWidget } from "../features/dashboard/widgets/RecentTransactionsWidget/RecentTransactionsWidget";
import { WeeklyActivityWidget } from "../features/dashboard/widgets/WeeklyActivityWidget/WeeklyActivityWidget";

export const Dashboard = () => {
  return (
    <DashboardLayout
      myCards={<MyCardsWidget />}
      recentTransactions={<RecentTransactionsWidget />}
      weeklyActivity={<WeeklyActivityWidget />}
      expenseStatistics={<ExpenseStatisticsWidget />}
      quickTransfer={<QuickTransferWidget />}
      balanceHistory={<BalanceHistoryWidget />}
    />
  );
};
