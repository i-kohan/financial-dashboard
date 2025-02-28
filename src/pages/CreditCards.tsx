import { Suspense } from "react";

import ErrorBoundary from "../components/ErrorBoundary";
import { Skeleton } from "../components/Skeleton";
import { AllCreditCardsList } from "../features/credit-cards/AllCreditCardsList";
import { AppLayout } from "../layouts/AppLayout";

export const CreditCardsPage = () => {
  return (
    <AppLayout pageTitle="Credit cards">
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Suspense
          fallback={
            <div className="m-6 h-96 pt-10">
              <Skeleton />
            </div>
          }
        >
          <div className="m-6 h-full w-full">
            <AllCreditCardsList />
          </div>
        </Suspense>
      </ErrorBoundary>
    </AppLayout>
  );
};
