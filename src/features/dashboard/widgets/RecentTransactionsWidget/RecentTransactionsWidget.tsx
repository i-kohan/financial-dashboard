import { Suspense } from "react";

import ErrorBoundary from "../../../../components/ErrorBoundary";
import { Skeleton } from "../../../../components/Skeleton";
import { WidgetItemWrapper } from "../../../../components/WidgetItemWrapper";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { RecentTransactionsContent } from "./RecentTransactionsContent";

export const RecentTransactionsWidget = () => {
  return (
    <WidgetWrapper title="Recent Transactions">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense fallback={<Skeleton />}>
          <WidgetItemWrapper>
            <RecentTransactionsContent />
          </WidgetItemWrapper>
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
