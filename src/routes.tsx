import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const CreditCards = lazy(() => import("./pages/CreditCards"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Setting = lazy(() => import("./pages/Setting"));

export const AppRoutes = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/credit-cards" element={<CreditCards />} />
      </Routes>
    </Suspense>
  </Router>
);
