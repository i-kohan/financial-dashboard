import { Suspense } from "react";

import { ChartSkeleton } from "../../../../components/ChartSkeleton";
import ErrorBoundary from "../../../../components/ErrorBoundary";
import { WidgetItemWrapper } from "../../../../components/WidgetItemWrapper";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { WeeklyActivityContent } from "./WeeklyActivityContent";

export const WeeklyActivityWidget = () => {
  return (
    <WidgetWrapper title="Weekly Activity">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense fallback={<ChartSkeleton />}>
          <WidgetItemWrapper>
            <WeeklyActivityContent />
          </WidgetItemWrapper>
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
