import { Suspense } from "react";

import { ChartSkeleton } from "../../../../components/ChartSkeleton";
import ErrorBoundary from "../../../../components/ErrorBoundary";
import { WidgetItemWrapper } from "../../../../components/WidgetItemWrapper";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { BalanceHistoryContent } from "./BalanceHistoryContent";

export const BalanceHistoryWidget = () => {
  return (
    <WidgetWrapper title="Balance History">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense fallback={<ChartSkeleton />}>
          <WidgetItemWrapper>
            <BalanceHistoryContent />
          </WidgetItemWrapper>
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
