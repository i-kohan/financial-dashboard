import { Suspense } from "react";

import ErrorBoundary from "../../../../components/ErrorBoundary";
import { Skeleton } from "../../../../components/Skeleton";
import { WidgetItemWrapper } from "../../../../components/WidgetItemWrapper";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { ExpenseStatisticsContent } from "./ExpenseStatisticsContent";

export const ExpenseStatisticsWidget = () => {
  return (
    <WidgetWrapper title="Expense Statistics">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense fallback={<Skeleton />}>
          <WidgetItemWrapper>
            <ExpenseStatisticsContent />
          </WidgetItemWrapper>
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
