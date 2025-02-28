import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  </Router>
);
