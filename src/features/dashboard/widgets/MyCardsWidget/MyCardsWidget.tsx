import { Suspense } from "react";

import { ChartSkeleton } from "../../../../components/ChartSkeleton";
import ErrorBoundary from "../../../../components/ErrorBoundary";
import { WidgetWrapper } from "../../../../components/WidgetWrapper";
import { CardsList } from "./CardsList";

export const MyCardsWidget = () => {
  return (
    <WidgetWrapper title="My Cards" seeAllLink="/credit-cards">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense fallback={<ChartSkeleton />}>
          <CardsList />
        </Suspense>
      </ErrorBoundary>
    </WidgetWrapper>
  );
};
