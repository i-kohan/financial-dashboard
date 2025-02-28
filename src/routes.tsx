import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CreditCardsPage } from "./pages/CreditCards";
import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/credit-cards" element={<CreditCardsPage />} />
    </Routes>
  </Router>
);
