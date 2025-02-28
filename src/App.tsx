import { UserProvider } from "./context/UserContext/UserProvider";
import { AppRoutes } from "./routes";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
