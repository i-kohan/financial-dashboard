import { Suspense } from "react";

import ErrorBoundary from "../../../../components/ErrorBoundary";
import { Skeleton } from "../../../../components/Skeleton";
import { WidgetItemWrapper } from "../../../../components/WidgetItemWrapper";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { QuickTransferContent } from "./QuickTransferContent";

export const QuickTransferWidget: React.FC = () => {
  return (
    <WidgetWrapper title="Quick Transfer">
      <ErrorBoundary
        fallback={
          <div className="text-red-500">Failed to load Quick Transfer</div>
        }
      >
        <Suspense fallback={<Skeleton />}>
          <WidgetItemWrapper>
            <QuickTransferContent />
          </WidgetItemWrapper>
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
