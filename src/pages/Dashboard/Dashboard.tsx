import { lazy, Suspense } from "react";

import { DashboardLayout } from "../../features/dashboard/layouts/DashboardLayout";

const MyCardsWidget = lazy(
  () => import("../../features/dashboard/widgets/MyCardsWidget"),
);
const BalanceHistoryWidget = lazy(
  () => import("../../features/dashboard/widgets/BalanceHistoryWidget"),
);
const QuickTransferWidget = lazy(
  () => import("../../features/dashboard/widgets/QuickTransferWidget"),
);
const ExpenseStatisticsWidget = lazy(
  () => import("../../features/dashboard/widgets/ExpenseStatisticsWidget"),
);
const RecentTransactionsWidget = lazy(
  () => import("../../features/dashboard/widgets/RecentTransactionsWidget"),
);
const WeeklyActivityWidget = lazy(
  () => import("../../features/dashboard/widgets/WeeklyActivityWidget"),
);

export const Dashboard = () => {
  return (
    <Suspense fallback="Loading...">
      <DashboardLayout
        myCards={<MyCardsWidget />}
        recentTransactions={<RecentTransactionsWidget />}
        weeklyActivity={<WeeklyActivityWidget />}
        expenseStatistics={<ExpenseStatisticsWidget />}
        quickTransfer={<QuickTransferWidget />}
        balanceHistory={<BalanceHistoryWidget />}
      />
    </Suspense>
  );
};
