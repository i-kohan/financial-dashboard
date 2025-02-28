import { AppLayout } from "../../../layouts/AppLayout";

interface IDashboardLayoutProps {
  myCards: React.ReactNode;
  recentTransactions: React.ReactNode;
  weeklyActivity: React.ReactNode;
  expenseStatistics: React.ReactNode;
  quickTransfer: React.ReactNode;
  balanceHistory: React.ReactNode;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  myCards,
  recentTransactions,
  weeklyActivity,
  expenseStatistics,
  quickTransfer,
  balanceHistory,
}) => {
  return (
    <AppLayout pageTitle="Overview">
      <div className="mx-auto flex flex-col gap-6 2xl:space-y-0">
        <div className="flex flex-col gap-6 2xl:flex-row">
          <div className="pr-0 pl-6 lg:pl-0 2xl:h-[282px] 2xl:w-[730px]">
            {myCards}
          </div>
          <div className="h-[282px] flex-1 px-6 lg:px-0">
            {recentTransactions}
          </div>
        </div>

        <div className="flex flex-col gap-6 2xl:flex-row">
          <div className="h-[367px] px-6 lg:px-0 2xl:w-[730px]">
            {weeklyActivity}
          </div>
          <div className="h-[367px] px-6 lg:px-0 2xl:flex-1">
            {expenseStatistics}
          </div>
        </div>

        <div className="flex flex-col gap-6 2xl:flex-row">
          <div className="h-[323px] px-6 lg:px-0 2xl:w-[445px]">
            {quickTransfer}
          </div>
          <div className="h-[323px] flex-1 px-6 lg:px-0">{balanceHistory}</div>
        </div>
      </div>
    </AppLayout>
  );
};
